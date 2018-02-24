import {Component, HostBinding, OnInit} from '@angular/core';
import {TreeNode, TREE_ACTIONS, KEYS, IActionMapping} from 'angular-tree-component';
import {MatDialog} from '@angular/material';
import {TreeDialogComponent} from './tree-dialog/tree-dialog.component';
import {routerAnimation} from '../../utils/page.animation';


@Component({
  selector: 'app-tree-page',
  templateUrl: './tree-page.component.html',
  styleUrls: ['./tree-page.component.scss'],
  animations: [routerAnimation]
})
export class TreePageComponent implements OnInit {
  // Add router animation
  @HostBinding('@routerAnimation') routerAnimation = true;
  // Model of tree nodes
  nodes: any[];
  // Mapping of keys and mouse events to actions
  actionMapping: IActionMapping = {
    mouse: {
      contextMenu: (tree, node, $event) => {
        $event.preventDefault();
        this.dialog.open(TreeDialogComponent, {data: {text: `context menu for ${node.data.name}`}});
      },
      dblClick: (tree, node, $event) => {
        if (node.hasChildren) {
          TREE_ACTIONS.TOGGLE_EXPANDED(tree, node, $event);
        }
      },
      click: (tree, node, $event) => {
        $event.shiftKey
          ? TREE_ACTIONS.TOGGLE_ACTIVE_MULTI(tree, node, $event)
          : TREE_ACTIONS.TOGGLE_ACTIVE(tree, node, $event);
      }
    },
    keys: {
      [KEYS.ENTER]: (tree, node, $event) => this.dialog.open(TreeDialogComponent, {data: {text: `This is ${node.data.name}`}})
    }
  };
  // Tree parameters
  customTemplateStringOptions = {
    isExpandedField: 'expanded',
    idField: 'uuid',
    getChildren: this.getChildren.bind(this),
    actionMapping: this.actionMapping,
    nodeHeight: 40,
    allowDrag: true,
    useVirtualScroll: true
  };

  asyncChildren = [
    {
      name: 'child2.1',
      subTitle: 'new and improved'
    }, {
      name: 'child2.2',
      subTitle: 'new and improved2'
    }
  ];

  constructor(private dialog: MatDialog) {
  }

  ngOnInit() {
    setTimeout(() => {
      this.nodes = [
        {
          expanded: true,
          name: 'root expanded',
          subTitle: 'the root',
          children: [
            {
              name: 'child1',
              subTitle: 'a good child',
              hasChildren: false
            }, {
              name: 'child2',
              subTitle: 'a bad child',
              hasChildren: false
            }
          ]
        },
        {
          name: 'root2',
          subTitle: 'the second root',
          children: [
            {
              name: 'child2.1',
              subTitle: 'new and improved',
              hasChildren: false
            }, {
              name: 'child2.2',
              subTitle: 'new and improved2',
              children: [
                {
                  uuid: 1001,
                  name: 'subsub',
                  subTitle: 'subsub',
                  hasChildren: false
                }
              ]
            }
          ]
        },
        {
          name: 'asyncroot',
          hasChildren: true
        }
      ];

      for (let i = 0; i < 15; i++) {
        this.nodes.push({
          name: `rootDynamic${i}`,
          subTitle: `root created dynamically ${i}`,
          children: new Array(3).fill(null).map((item, n) => ({
            name: `childDynamic${i}.${n}`,
            subTitle: `child created dynamically ${i}`,
            hasChildren: false
          }))
        });
      }
    }, 1);
  }

  getChildren(node: any) {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(this.asyncChildren.map((c) => {
        return Object.assign({}, c, {
          hasChildren: node.level < 5
        });
      })), 1000);
    });
  }

  addNode(tree) {
    this.nodes[0].children.push({
      name: 'a new child'
    });
    tree.treeModel.update();
  }

  filterNodes(text, tree) {
    tree.treeModel.filterNodes(text);
  }

  activateSubSub(tree) {
    tree.treeModel.getNodeById(1001).setActiveAndVisible();
  }

  go($event) {
    $event.stopPropagation();
    this.dialog.open(TreeDialogComponent, {data: {text: 'this method is on the app component'}});
  }
}
