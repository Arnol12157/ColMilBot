import {AfterViewChecked, AfterViewInit, Component, ElementRef, HostBinding, OnInit, ViewChild} from '@angular/core';
import {TdMediaService} from '@covalent/core';
import {routerAnimation} from '../../utils/page.animation';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.scss'],
  animations: [routerAnimation]
})
export class ChatPageComponent implements OnInit, AfterViewChecked, AfterViewInit {
  // Add router animation
  @HostBinding('@routerAnimation') routerAnimation = true;
  // Available contacts
  contactData = [
    {name: 'Ada	Allison', group: ['Favorite', 'Work'], imageUrl: 'assets/avatars/4040.png'},
    {name: 'Adrienne	Drake', group: ['Work'], imageUrl: 'assets/avatars/4040.png'},
    {name: 'Alberta	Wallace', group: [], imageUrl: 'assets/avatars/4040.png'},
    {name: 'Alexandra	Elliott', group: ['Favourite'], imageUrl: 'assets/avatars/4040.png'},
    {name: 'Alfredo	Gray', group: ['Work'], imageUrl: 'assets/avatars/4040.png'},
    {name: 'Allan	Hansen', group: [], imageUrl: 'assets/avatars/4040.png'},
    {name: 'Allan	Webster', group: [], imageUrl: 'assets/avatars/4040.png'},
    {name: 'Alma	Russell', group: [], imageUrl: 'assets/avatars/4040.png'},
    {name: 'Amos	Wong', group: [], imageUrl: 'assets/avatars/4040.png'},
    {name: 'Andrea	Lloyd', group: ['Work'], imageUrl: 'assets/avatars/4040.png'},
    {name: 'Angela	Moody', group: [''], imageUrl: 'assets/avatars/4040.png'},
    {name: 'Angie	Ortega', group: [], imageUrl: 'assets/avatars/4040.png'},
    {name: 'Ann	Watson', group: ['Work'], imageUrl: 'assets/avatars/4040.png'},
    {name: 'Arthur	Freeman', group: [], imageUrl: 'assets/avatars/4040.png'},
    {name: 'Ashley	Ward', group: [], imageUrl: 'assets/avatars/4040.png'},
    {name: 'Austin	Garcia', group: ['Work'], imageUrl: 'assets/avatars/4040.png'},
    {name: 'Benny	Holland', group: [], imageUrl: 'assets/avatars/4040.png'},
    {name: 'Betsy	Gilbert', group: ['Work'], imageUrl: 'assets/avatars/4040.png'},
    {name: 'Billy	Banks', group: [], imageUrl: 'assets/avatars/4040.png'},
    {name: 'Blanche	Rodgers', group: [''], imageUrl: 'assets/avatars/4040.png'},
    {name: 'Bob	Barber', group: [], imageUrl: 'assets/avatars/4040.png'},
    {name: 'Boyd	Mcgee', group: [''], imageUrl: 'assets/avatars/4040.png'},
    {name: 'Bradford	Jones', group: ['Work'], imageUrl: 'assets/avatars/4040.png'},
    {name: 'Bradley	Romero', group: [], imageUrl: 'assets/avatars/4040.png'},
    {name: 'Calvin	West', group: [], imageUrl: 'assets/avatars/4040.png'},
    {name: 'Candice	Murphy', group: [], imageUrl: 'assets/avatars/4040.png'},
    {name: 'Candice	Ellis', group: ['Work'], imageUrl: 'assets/avatars/4040.png'},
    {name: 'Carla	Erickson', group: [], imageUrl: 'assets/avatars/4040.png'},
    {name: 'Carlton	Schmidt', group: [], imageUrl: 'assets/avatars/4040.png'},
    {name: 'Carol	Mathis', group: [''], imageUrl: 'assets/avatars/4040.png'},
    {name: 'Carole	Taylor', group: [], imageUrl: 'assets/avatars/4040.png'},
    {name: 'Carolyn	Floyd', group: ['Work', 'Favourite'], imageUrl: 'assets/avatars/4040.png'},
    {name: 'Casey	Rowe', group: [], imageUrl: 'assets/avatars/4040.png'},
    {name: 'Cassandra	Phillips', group: [], imageUrl: 'assets/avatars/4040.png'},
    {name: 'Charlotte	Lopez', group: ['Work'], imageUrl: 'assets/avatars/4040.png'},
    {name: 'Chester	Ortiz', group: [], imageUrl: 'assets/avatars/4040.png'},
  ];
  // Available contacts after applying search filter
  filteredData = this.groupByLetter(this.contactData);
  // Selected contac to send message
  selectedContact = this.contactData[0];
  // Messages of selected contact
  messages;
  // Boolean flag to update chat scroll if needed
  updateScroll = true;
  // Side nav state
  sideNavOpen = false;
  @ViewChild('chat') private chatContainer: ElementRef;

  constructor(public media: TdMediaService) {
    this.loadMessages();
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    setTimeout(() => this.sideNavOpen = true, 0);
  }

  ngAfterViewChecked(): void {
    if (this.updateScroll) {
      this.updateScroll = false;
      this.chatContainer.nativeElement.scrollTop = this.chatContainer.nativeElement.scrollHeight;
    }
    this.media.broadcast();
  }

  /**
   * Serch method by string and group
   * @param search
   * @param group
   */
  filter(search, group) {
    let tempData = this.contactData;
    if (search) {
      search = search.trim();
      tempData = this.contactData.filter((contact) => contact.name.match(new RegExp(`${search}`, 'i')));
    }
    if (group && group !== 'All') {
      tempData = tempData.filter((contact) => contact.group.indexOf(group) >= 0);
    }
    this.filteredData = this.groupByLetter(tempData);
  }

  /**
   * Method for grouping contacts by first letter
   * @param raw
   * @returns {any}
   */
  groupByLetter(raw: Array<any>) {
    return raw.reduce((groups, val) => {
      const firstChar = val.group.indexOf('Favourite') < 0 ? val.name.charAt(0) : 'Favourite';
      if (!groups[firstChar]) {
        groups[firstChar] = {
          firstChar: firstChar,
          contacts: []
        };
      }
      groups[firstChar].contacts.push(val);
      return groups;
    }, {
      'Favourite': {
        firstChar: 'Favourite',
        contacts: []
      }
    });
  }

  /**
   *
   * @returns {Array} groups of filtered data
   */
  getGroups() {
    const keys = [];
    for (const key in this.filteredData) {
      if (key) {
        keys.push(key);
      }
    }
    return keys;
  }

  /**
   * Mock method for message generation
   */
  loadMessages() {
    const groupsByDay = [];
    for (let i = 0; i < 3; i++) {
      const day = {
        date: '',
        messages: []
      };
      if (i !== 2) {
        day.date = `Mon, ${i + 1} May`;
      } else {
        day.date = 'Today';
      }
      groupsByDay.push(day);
      for (let j = 0; j < 5; j++) {
        day.messages.push({
          text: Math.random() > 0.5 ? 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, ullam.' : 'Lorem' +
            ' ipsum dolor sit amet, consectetur adipisicing elit. Animi asperiores, cupiditate deleniti dolore, hic' +
            ' laudantium, maiores nam obcaecati omnis porro possimus praesentium provident quibusdam ratione sunt totam' +
            ' unde voluptatem voluptatum.',
          time: `0${1 + j}:15`,
          author: Math.random() > 0.5 ? this.selectedContact : null
        });
      }
    }
    this.messages = groupsByDay;
  }

  /**
   * Creates new message
   * @param message
   */
  sendMessage(message) {
    const date = new Date();
    this.messages[this.messages.length - 1].messages.push({
      text: message,
      time: `${date.getHours()}:${date.getMinutes() > 10 ? date.getMinutes() : '0' + date.getMinutes() }`,
    });
    this.updateScroll = true;
  }
}
