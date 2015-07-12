import './stylesheets/main.css';
import React from 'react';
import FilterableProductTable from './src/filterable-product-table';

// init shell
renderShell();

function renderShell() {
  var shell = document.createElement('h1');
  shell.className = 'app-shell';
  document.body.appendChild(shell);
  React.render(<FilterableProductTable />, shell);
}