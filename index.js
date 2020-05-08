const rows = document.getElementsByTagName('tr');

    const addColor = (cell) => {
      cell.classList.add('difference-accent');
    };

    const colorIfDifferent = (rows) => {
      for (let j = 8; j < rows.length; j++) {
        const cells = rows[j].getElementsByTagName('td');
        const firstCell = cells[1];

        for (let i = 2; i < cells.length; i++) {
          let currentCell = cells[i];
          if (currentCell.innerText !== firstCell.innerText) addColor(currentCell);
        }
      }
    };

    colorIfDifferent(rows);