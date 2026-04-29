# Read file (cursor)

* Reader support is available on Windows in version `1.3.4.1` and later.
* The extension version must be `1.2.7` or later.
* When installing from PECL, answer `yes` when prompted to enable reader support.

## Compiling

Add `--enable-reader` when compiling from source.

```bash
./configure --enable-reader
```

## Example 1

```php
$config   = ['path' => './tests'];
$excel    = new \Vtiful\Kernel\Excel($config);

$filePath = $excel->fileName('tutorial.xlsx')
    ->header(['Item', 'Cost'])
    ->output();

$excel->openFile('tutorial.xlsx')
    ->openSheet();

var_dump($excel->nextRow()); // ['Item', 'Cost']
var_dump($excel->nextRow()); // NULL
```

## Example 2

Use strict comparison when iterating with `nextRow()`. Empty rows return an empty array, so loose comparison can stop iteration too early.

```php
$config = ['path' => './tests'];
$excel  = new \Vtiful\Kernel\Excel($config);

$filePath = $excel->fileName('tutorial.xlsx')
    ->header(['Item', 'Cost'])
    ->output();

$excel->openFile('tutorial.xlsx')
    ->openSheet();

while (($row = $excel->nextRow()) !== null) {
    var_dump($row);
}
```
