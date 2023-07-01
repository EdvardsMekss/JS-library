// Store the books in an array
let books = [];

// Function to add a book
function addBook(title, author, pageCount) {
  const book = {
    title,
    author,
    pageCount
  };

  books.push(book);
}

// Function to display the inventory
function showInventory() {
  const inventoryDiv = document.getElementById('inventory');
  inventoryDiv.innerHTML = '';

  if (books.length === 0) {
    inventoryDiv.innerHTML = '<p>No books in inventory.</p>';
    return;
  }

  const table = document.createElement('table');
  table.innerHTML = `
    <tr>
      <th>Title</th>
      <th>Author</th>
      <th>Page Count</th>
    </tr>
  `;

  books.forEach(book => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.pageCount}</td>
    `;
    table.appendChild(row);
  });

  inventoryDiv.appendChild(table);
}

// Event listener for form submission
document.getElementById('bookForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const title = document.getElementById('titleInput').value;
  const author = document.getElementById('authorInput').value;
  const pageCount = document.getElementById('pageCountInput').value;

  addBook(title, author, pageCount);
  showInventory();

  // Reset form fields
  this.reset();
});

// Event listener for show inventory button
document.getElementById('showInventoryBtn').addEventListener('click', showInventory);
