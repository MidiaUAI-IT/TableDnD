# Table Drag and Drop - without jQuery

## Based on [Nabil codepen - drag and drop table with pure javascript](https://codepen.io/nabildroid/pen/ZPwYvp)

### How to use:
```HTML
    <table class="table-dnd-midiauai">

      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Type</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>1</td>
          <td>Nabil</td>
          <td>droid</td>
          <td>x</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Test</td>
          <td>testing</td>
          <td>x</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Hello</td>
          <td>world</td>
          <td>x</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Programming</td>
          <td>javascript</td>
          <td>x</td>
        </tr>
      </tbody>

    </table>
```

```JS
    <script src="src/js/table-dnd.js"></script>
    <script>
      tableDnD('.table-dnd-midiauai', function () {
        console.log('Start');
      }, () => {
        console.log('over')
      }, function () {
        console.log('End')
      });
    </script>
```
