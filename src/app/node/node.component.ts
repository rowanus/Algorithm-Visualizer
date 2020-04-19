import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.css']
})
export class NodeComponent implements OnInit {
  grid = [];
  START_NODE_ROW = 10;
  START_NODE_COL = 15;
  FINISH_NODE_ROW = 10;
  FINISH_NODE_COL = 35;

  constructor() { }

  ngOnInit(): void {
    const grid = [];
    for (let row = 0; row < 29; row++) {
      const currentRow = [];
      for (let col = 0; col < 75; col++) {
        currentRow.push(this.createNode(col, row));
      }
      grid.push(currentRow);
    }
    this.grid = grid;
    console.log(this.grid[1])
  }
  
  createNode(col, row): any {
    return {
      col,
      row,
      isStart: row === this.START_NODE_ROW && col === this.START_NODE_COL,
      isFinish: row === this.FINISH_NODE_ROW && col === this.FINISH_NODE_COL,
      distance: Infinity,
      isVisited: false,
      isWall: false,
      previousNode: null,
    };
  };
}
