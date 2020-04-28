import { Component, OnInit } from '@angular/core';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import {NestedTreeControl} from '@angular/cdk/tree';

const TREE_DATA: FoodNode[] = [
  {
    name: 'Rejestracja', url: '/admin/registry'
  },
  {
    name: 'Dodanie kolekcji', url: '/admin/addColection'
  },
  {
    name: 'Dodanie Bryły', url: '/admin/addBlock'
  },
];

@Component({
  selector: 'app-boczne-menu',
  templateUrl: './boczne-menu.component.html',
  styleUrls: ['./boczne-menu.component.css']
})
export class BoczneMenuComponent implements OnInit {
  panelOpenState = false;
  events: string[] = [];
  opened: boolean;

  treeControl = new NestedTreeControl<FoodNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<FoodNode>();

  constructor() {this.dataSource.data = TREE_DATA; }

  ngOnInit() {
  }
  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;
}
interface FoodNode {
  name: string;
  url?: string;
  children?: FoodNode[];
}
