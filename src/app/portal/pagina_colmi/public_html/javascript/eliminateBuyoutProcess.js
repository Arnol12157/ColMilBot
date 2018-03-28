/*
╔══════════════════════════════════════════════════╗
  * this script contain the
    angular functions to partResults.php

  * this script need the angular, jquery,
    bootstrap js.

  @author Rodrigo Dorado ║█║▌║█║▌│║▌█║║▌
╚══════════════════════════════════════════════════╝
*/

function getVariableOfForm(field_form_id){
  return parent.document.getElementById('form[' + field_form_id + ']').value;
}

//Angular module
var partResults = angular.module('partResults', []);

partResults.controller('partResultsController', function ($scope, $http){
  $scope.filter = {A: '', B: '', C: '', D: ''};
  $scope.navs = {
    navs: [
      {
        name: 'Maximo Asset Spare Parts',
        data: {
            head_id: 'A',
            head: ['A', 'B', 'C'],
            data: [
              {A: 'A1', B: 'B1', C: 'C1'},
              {A: 'A2', B: 'B2', C: 'C2'}
            ]
          },
        active: true
        },
      {
        name: 'Maximo job plan',
        data: {
            head_id: 'A',
            head: ['A', 'B'],
            data: [
              {A: '2A1', B: '2B1'},
              {A: '2A2', B: '2B2'},
              {A: '2A3', B: '2B3'},
              {A: '2A4', B: '2B4'},
              {A: '2A5', B: '2B5'},
              {A: '2A6', B: '2B6'},
              {A: '2A7', B: '2B7'},
              {A: '2A8', B: '2B8'},
              {A: '2A9', B: '2B9'}
            ]
          },
        active: false},
      {
        name: 'Maxino Usage',
        data: {
          head_id: '',
          head: [],
          data: []
        },
        active: false},
      {
        name: 'Non-Catalog',
        data: {
            head_id: 'C',
            head: ['A', 'B', 'C'],
            data: [
              {A: 'A1', B: 'B1', C: 'C1'},
              {A: 'A1', B: 'B2', C: 'C2'},
              {A: 'A2', B: 'B1', C: 'C3'},
              {A: 'A2', B: 'B2', C: 'C4'}
            ]
          },
        active: false
      },
      {
        name: 'MRC Inventory',
        data: {
          head_id: '',
          head: [],
          data: []
        },
        active: false},
      {
        name: 'MRC Usage',
        data: {
          head_id: 'UID',
          head: ['A', 'B', 'C', 'D', 'E'],
          data: [
            {UID: '0',A: 'A1', B: 'B1', C: 'C1', D:'D1', E: 'E1'},
            {UID: '1',A: 'A1', B: 'B1', C: 'C1', D:'D1', E: 'E2'},
            {UID: '2',A: 'A1', B: 'B1', C: 'C1', D:'D1', E: 'E3'},
            {UID: '3',A: 'A1', B: 'B1', C: 'C1', D:'D2', E: 'E1'},
            {UID: '4',A: 'A1', B: 'B1', C: 'C1', D:'D2', E: 'E2'},
            {UID: '5',A: 'A1', B: 'B1', C: 'C1', D:'D2', E: 'E3'},
            {UID: '6',A: 'A1', B: 'B1', C: 'C2', D:'D1', E: 'E1'},
            {UID: '7',A: 'A1', B: 'B1', C: 'C2', D:'D1', E: 'E2'},
            {UID: '8',A: 'A1', B: 'B1', C: 'C2', D:'D1', E: 'E3'},
            {UID: '9',A: 'A1', B: 'B1', C: 'C2', D:'D2', E: 'E1'},
            {UID: '10',A: 'A1', B: 'B1', C: 'C2', D:'D2', E: 'E2'},
            {UID: '11',A: 'A1', B: 'B1', C: 'C2', D:'D2', E: 'E3'},
            {UID: '12',A: 'A1', B: 'B1', C: 'C3', D:'D1', E: 'E1'},
            {UID: '13',A: 'A1', B: 'B1', C: 'C3', D:'D1', E: 'E2'},
            {UID: '14',A: 'A1', B: 'B1', C: 'C3', D:'D1', E: 'E3'},
            {UID: '15',A: 'A1', B: 'B1', C: 'C3', D:'D2', E: 'E1'},
            {UID: '16',A: 'A1', B: 'B1', C: 'C3', D:'D2', E: 'E2'},
            {UID: '17',A: 'A1', B: 'B1', C: 'C3', D:'D2', E: 'E3'},

            {UID: '18', A: 'A1', B: 'B2', C: 'C1', D:'D1', E: 'E1'},
            {UID: '19', A: 'A1', B: 'B2', C: 'C1', D:'D1', E: 'E2'},
            {UID: '20', A: 'A1', B: 'B2', C: 'C1', D:'D1', E: 'E3'},
            {UID: '21', A: 'A1', B: 'B2', C: 'C1', D:'D2', E: 'E1'},
            {UID: '22', A: 'A1', B: 'B2', C: 'C1', D:'D2', E: 'E2'},
            {UID: '23', A: 'A1', B: 'B2', C: 'C1', D:'D2', E: 'E3'},
            {UID: '24', A: 'A1', B: 'B2', C: 'C2', D:'D1', E: 'E1'},
            {UID: '25', A: 'A1', B: 'B2', C: 'C2', D:'D1', E: 'E2'},
            {UID: '26', A: 'A1', B: 'B2', C: 'C2', D:'D1', E: 'E3'},
            {UID: '27', A: 'A1', B: 'B2', C: 'C2', D:'D2', E: 'E1'},
            {UID: '28', A: 'A1', B: 'B2', C: 'C2', D:'D2', E: 'E2'},
            {UID: '29', A: 'A1', B: 'B2', C: 'C2', D:'D2', E: 'E3'},
            {UID: '30', A: 'A1', B: 'B2', C: 'C3', D:'D1', E: 'E1'},
            {UID: '31', A: 'A1', B: 'B2', C: 'C3', D:'D1', E: 'E2'},
            {UID: '32', A: 'A1', B: 'B2', C: 'C3', D:'D1', E: 'E3'},
            {UID: '33', A: 'A1', B: 'B2', C: 'C3', D:'D2', E: 'E1'},
            {UID: '34', A: 'A1', B: 'B2', C: 'C3', D:'D2', E: 'E2'},
            {UID: '35', A: 'A1', B: 'B2', C: 'C3', D:'D2', E: 'E3'},

            {UID: '36',A: 'A2', B: 'B1', C: 'C1', D:'D1', E: 'E1'},
            {UID: '37',A: 'A2', B: 'B1', C: 'C1', D:'D1', E: 'E2'},
            {UID: '38',A: 'A2', B: 'B1', C: 'C1', D:'D1', E: 'E3'},
            {UID: '39',A: 'A2', B: 'B1', C: 'C1', D:'D2', E: 'E1'},
            {UID: '40',A: 'A2', B: 'B1', C: 'C1', D:'D2', E: 'E2'},
            {UID: '41',A: 'A2', B: 'B1', C: 'C1', D:'D2', E: 'E3'},
            {UID: '42',A: 'A2', B: 'B1', C: 'C2', D:'D1', E: 'E1'},
            {UID: '43',A: 'A2', B: 'B1', C: 'C2', D:'D1', E: 'E2'},
            {UID: '44',A: 'A2', B: 'B1', C: 'C2', D:'D1', E: 'E3'},
            {UID: '45',A: 'A2', B: 'B1', C: 'C2', D:'D2', E: 'E1'},
            {UID: '46',A: 'A2', B: 'B1', C: 'C2', D:'D2', E: 'E2'},
            {UID: '47',A: 'A2', B: 'B1', C: 'C2', D:'D2', E: 'E3'},
            {UID: '48',A: 'A2', B: 'B1', C: 'C3', D:'D1', E: 'E1'},
            {UID: '49',A: 'A2', B: 'B1', C: 'C3', D:'D1', E: 'E2'},
            {UID: '50',A: 'A2', B: 'B1', C: 'C3', D:'D1', E: 'E3'},
            {UID: '52',A: 'A2', B: 'B1', C: 'C3', D:'D2', E: 'E1'},
            {UID: '53',A: 'A2', B: 'B1', C: 'C3', D:'D2', E: 'E2'},
            {UID: '54',A: 'A2', B: 'B1', C: 'C3', D:'D2', E: 'E3'},

            {UID: '55', A: 'A2', B: 'B2', C: 'C1', D:'D1', E: 'E1'},
            {UID: '56', A: 'A2', B: 'B2', C: 'C1', D:'D1', E: 'E2'},
            {UID: '57', A: 'A2', B: 'B2', C: 'C1', D:'D1', E: 'E3'},
            {UID: '58', A: 'A2', B: 'B2', C: 'C1', D:'D2', E: 'E1'},
            {UID: '59', A: 'A2', B: 'B2', C: 'C1', D:'D2', E: 'E2'},
            {UID: '60', A: 'A2', B: 'B2', C: 'C1', D:'D2', E: 'E3'},
            {UID: '61', A: 'A2', B: 'B2', C: 'C2', D:'D1', E: 'E1'},
            {UID: '62', A: 'A2', B: 'B2', C: 'C2', D:'D1', E: 'E2'},
            {UID: '63', A: 'A2', B: 'B2', C: 'C2', D:'D1', E: 'E3'},
            {UID: '64', A: 'A2', B: 'B2', C: 'C2', D:'D2', E: 'E1'},
            {UID: '65', A: 'A2', B: 'B2', C: 'C2', D:'D2', E: 'E2'},
            {UID: '66', A: 'A2', B: 'B2', C: 'C2', D:'D2', E: 'E3'},
            {UID: '67', A: 'A2', B: 'B2', C: 'C3', D:'D1', E: 'E1'},
            {UID: '68', A: 'A2', B: 'B2', C: 'C3', D:'D1', E: 'E2'},
            {UID: '69', A: 'A2', B: 'B2', C: 'C3', D:'D1', E: 'E3'},
            {UID: '70', A: 'A2', B: 'B2', C: 'C3', D:'D2', E: 'E1'},
            {UID: '71', A: 'A2', B: 'B2', C: 'C3', D:'D2', E: 'E2'},
            {UID: '72', A: 'A2', B: 'B2', C: 'C3', D:'D2', E: 'E3'},
          ]
        },
        active: false},
      {
        name: 'Wesco Usage',
        data: {
          head_id: '',
          head: [],
          data: []
        },
        active: false
      },
      {
        name: 'Wesco Inventory',
        data: {
          head_id: '',
          head: [],
          data: []
        },
        active: false
      },
      {
        name: 'Oracle ERP',
        data: {
          head_id: '',
          head: [],
          data: []
        },
        active: false
      }
    ],
    table: {
      head_id: '',
      name: '',
      head: [],
      data: []
    },
    selectedItems: {},
    jsonSelectedItems: '',
    changeActive: function(pos){
      for(var i = 0; i < this.navs.length; i++){
        this.navs[i].active = false;
      }
      this.navs[pos].active = true;
      this.getData(pos);
    },
    getData: function(pos){
      this.table = {
        name: this.navs[pos].name,
        head_id: this.navs[pos].data.head_id,
        head: this.navs[pos].data.head,
        data: this.navs[pos].data.data
      };
    },
    setSelectItemsPart: function(){
      for(var i = 0; i < this.navs.length; i++){
        this.selectedItems[this.navs[i].name] = {};
      }
    },
    changeTabSelected: function(){
      this.jsonSelectedItems = JSON.stringify(this.selectedItems);
    },
    synchroTabSelected: function(){
      if(this.jsonSelectedItems != ''){
        this.selectedItems = JSON.parse(this.jsonSelectedItems);
      }
    }
  };

  $scope.filterResults = function(){

  }

  $scope.print = function(value){
    console.log(value);
  }

  $scope.getVariables = function(){
    $scope.navs.jsonSelectedItems = getVariableOfForm('VAR_SELECTED_PART_OBJECT');
    $scope.filter.A               = getVariableOfForm('VAR_RESULT_FILTER_A');
    $scope.filter.B               = getVariableOfForm('VAR_RESULT_FILTER_B');
    $scope.filter.C               = getVariableOfForm('VAR_RESULT_FILTER_C');
    $scope.filter.D               = getVariableOfForm('VAR_RESULT_FILTER_D');
  }

  $scope.readyFunction = function(){
    $scope.getVariables('jsonSelectedItems', 'VAR_SELECTED_PART_OBJECT');
    $scope.navs.getData(0);
    $scope.navs.setSelectItemsPart();
    $scope.navs.synchroTabSelected();
  }
});

//Angular module
var maximoAssetSpareParts = angular.module('maximoSparePartUpdate', []);

maximoAssetSpareParts.controller('maximoSparePartUpdateController', function ($scope, $http){
  $scope.AssetsArray = [
    {check: false, asset: 'A', location: 'AL', description: 'AD'},
    {check: false, asset: 'B', location: 'BL', description: 'BD'},
    {check: false, asset: 'C', location: 'CL', description: 'CD'},
  ];
  $scope.search = {asset: '', location: '', description: ''};

  $scope.readyFunction = function(){

  }
});

//Angular module
var maximoAssetSpareParts = angular.module('partSearchRequest', []);

maximoAssetSpareParts.controller('partSearchRequestController', function ($scope, $http){

  $scope.readyFunction = function(){
    
  }
});