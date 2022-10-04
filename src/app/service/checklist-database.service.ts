import { Component, Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SelectionModel } from '@angular/cdk/collections';
import { FlatTreeControl } from '@angular/cdk/tree';

// Node for to do item
export class TodoItemNode{
  children!:TodoItemNode[];
  item!:string;
}
// Flat to-do item node with expandable and level information
export class TodoItemFlatNode{
  level!:number;
  item!:string;
  expandable!:boolean;
}
 
// The Json object for to-do list data.
const TREE_DATA = {
  Groceries: {
    'Almond Meal flour': 'saleem',
    'Organic eggs': null,
    'Protein Powder': null,
    Fruits: {
      Apple: 'red',
      Berries: ['Blueberry', 'Raspberry'],
      Orange: null,
    },
  },
  Reminders: ['Cook dinner', 'Read the Material Design spec', 'Upgrade Application to Angular'],
}
// const TREE_DATA = {
//   Groceries: {
//     'Almond Meal flour': null,
//     'Organic eggs': null,
//     'Protein Powder': null,
//     Fruits: {
//       Apple: null,
//       Berries: ['Blueberry', 'Raspberry'],
//       Orange: null,
//     },
//   },
//   Reminders: ['Cook dinner', 'Read the Material Design spec', 'Upgrade Application to Angular'],
// }
// const TREE_DATA =  [
//   {
//     "id": 100547,
//     "text": "<span class='fa-folder-opens-icon'></span> Activation Delay<div id='action_2' class='action_tree'><span title='Edit RCA'  class='fa fa-edit pl-5' onClick ='EditRCAData(100547,1,0,\"activation\",0,\"No+Root+Cause+Parent\",\"Activation+Delay\")'></span> <span title='Delete RCA' class='fa fa-times pl-3' data-toggle='modal' onClick='DeleteRCAData(100547,1)'></span><div id='action_2' class='action_tree'></div>",
//     "parent": "#",
//     "state": {
//       "opened": true
//     },
//     "workflowid": null
//   },
//   {
//     "id": 100548,
//     "text": "<span class='fa-folder-opens-icon'></span> Poor identification by EMS<div id='action_2' class='action_tree'><span title='Edit RCA'  class='fa fa-edit pl-5' onClick ='EditRCAData(100548,1,0,\"activation\",100547,\"Activation+Delay\",\"Poor+identification+by+EMS\")'></span> <span title='Delete RCA' class='fa fa-times pl-3' data-toggle='modal' onClick='DeleteRCAData(100548,1)'></span><div id='action_2' class='action_tree'></div>",
//     "parent": "100547",
//     "state": {
//       "opened": true
//     },
//     "workflowid": null
//   },
//   {
//     "id": 100550,
//     "text": "<span class='fa-folder-opens-icon'></span> Alternating symptoms presentation for basilar thrombosis missed<div id='action_2' class='action_tree'><span title='Edit RCA'  class='fa fa-edit pl-5' onClick ='EditRCAData(100550,1,0,\"activation\",100548,\"Poor+identification+by+EMS\",\"Alternating+symptoms+presentation+for+basilar+thrombosis+missed\")'></span> <span title='Delete RCA' class='fa fa-times pl-3' data-toggle='modal' onClick='DeleteRCAData(100550,1)'></span><div id='action_2' class='action_tree'></div>",
//     "parent": "100548",
//     "state": {
//       "opened": true
//     },
//     "workflowid": null
//   }
// ]

// Checklist database, it can build a tree structured Json object.
// Each node in Json object represents a to-do item or a category.
// If a node is a category, it has children items and new items can be added under the category.

@Injectable({
  providedIn: 'root'
})
export class ChecklistDatabase{

  dataChange = new BehaviorSubject<TodoItemNode[]>([]);

  get data():TodoItemNode[]{
    return this.dataChange.value;
  }

  constructor(){
    this.initialize();
  }
  // Build the tree nodes from Json object. The result is a list of `TodoItemNode` with nested
  //     file node as children.

  initialize(){

    const data = this.buildFileTree(TREE_DATA,0);

    // Notify the changes
    this.dataChange.next(data);
  }

  
    // Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
    // The return value is the list of `TodoItemNode`.

    buildFileTree(obj:{[key:string]:any},level:number):TodoItemNode[]{

      return Object.keys(obj).reduce<TodoItemNode[]>((accumulator,key)=>{
        const value = obj[key];
        const node = new TodoItemNode();
        node.item = key;

        if(value != null){
          if(typeof value === 'object'){
            node.children = this.buildFileTree(value,  level + 1);
          }
          else{
            node.item = value;
          }
        }
        return accumulator.concat(node);
      }, []);
    }

    // Add an item to to-do list

    insertItem(parent:TodoItemNode,name:string){
      if(parent.children){
        parent.children.push({item:name} as TodoItemNode);
        this.dataChange.next(this.data);
      }
    }

     /** Add an item to to-do list */

  // insertItem(parent: TodoItemNode, name: string): TodoItemNode {
    
  //   if (!parent.children) {
  //     parent.children = [];
  //   }
  //   const newItem = { item: name } as TodoItemNode;
  //   parent.children.push(newItem);
  //   this.dataChange.next(this.data);
  //   return newItem;
  // }
    updateItem(node:TodoItemNode,name:string){
      node.item = name;
      this.dataChange.next(this.data);
    }

    public deleteItem(parent: TodoItemNode, name: string): void {

      if (parent.children) {
        parent.children = parent.children.filter(c => c.item !== name);
        this.dataChange.next(this.data);
      }
  
    }
}





















































// export class TreeViewComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
