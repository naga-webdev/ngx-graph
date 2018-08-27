import { Component, OnInit, Input } from '@angular/core';
import * as shape from 'd3-shape';

// model for rater json

interface NodeGraphData {
  accountNm: string;
  links: Link[];
  nodes: Node[];
  groups: Group[];
  urls: Url[];
}

interface Url {
  id: string;
  hyperLink: string;
}

interface Group {
  id: string;
  groupName: string;
  nodes: string[];
}

interface Node {
  position: string;
  id: string;
  label: string;
}

interface Link {
  source: string;
  target: string;
}

@Component({
  selector: 'app-node-graph',
  templateUrl: './node-graph.component.html',
  styleUrls: ['./node-graph.component.scss']
})
export class NodeGraphComponent implements OnInit {

  @Input() graphData: NodeGraphData;

  // ?  curve shape from d3-shape read more @https://github.com/d3/d3-shape#curves
  // curve = shape.curveBundle.beta(1);
  curve = shape.curveLinear; // preferred

  // view for height and width of graph
  view: any[];

  hierarchialGraph = {
    nodes: [],
    links: []
  };

  graphTitle: string;

  constructor() {
    this.view = [1200, 600]; // width, height should in number(no need to provide px)
  }

  ngOnInit() {
    // console.log(this.graphData);
    this.formatData(this.graphData);
    // this.showGraph();
  }

  showGraph() {
    this.hierarchialGraph.nodes = [
      {
        id: '0',
        label: 'Node 0'
      },
      {
        id: '1',
        label: 'Node 1'
      },
      {
        id: '2',
        label: 'Node 2'
      },
      {
        id: '3',
        label: 'Node 3'
      },
      {
        id: '4',
        label: 'Node 4'
      },
      {
        id: '5',
        label: 'Node 5'
      },
      {
        id: '6',
        label: 'Node 6'
      }
    ];

    this.hierarchialGraph.links = [
      {
        source: '0',
        target: '1'
      },
      {
        source: '1',
        target: '2',
      },
      {
        source: '1',
        target: '3'
      },
      {
        source: '2',
        target: '4'
      },
      {
        source: '2',
        target: '5'
      },
      {
        source: '3',
        target: '6'
      }
    ];
  }

  formatData(nodeGraphData: NodeGraphData) {
    this.setGraphTitle(nodeGraphData.accountNm);
    this.mapNodes(nodeGraphData.nodes);
    this.mapLinks(nodeGraphData.links);
  }

  setGraphTitle(graphTitle: string) {
    this.graphTitle = graphTitle;
  }

  mapNodes(nodes: Node[]) {
    nodes.forEach(node => {

      const treeNode = {
        id: null,
        label: null,
        position: null
      };

      treeNode.id = node.id;
      treeNode.label = node.label;
      treeNode.position = node.position;

      this.hierarchialGraph.nodes.push(treeNode);

    });
  }

  mapLinks(treeLinks: Link[]) {
    treeLinks.forEach(link => {

      const treeLink = {
        source: null,
        target: null
      };

      treeLink.source = link.source;
      treeLink.target = link.target;

      this.hierarchialGraph.links.push(treeLink);

    });
  }

}
