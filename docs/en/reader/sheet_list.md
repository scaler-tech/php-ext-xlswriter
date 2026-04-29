# Worksheet list

* Reader support is available on Windows in version `1.3.4.1` and later.
* The extension version must be `1.2.7` or later.
* When installing from PECL, answer `yes` when prompted to enable reader support.

## Function Prototype

```php
sheetList(): array
```

## Example

```php
$excel = new \Vtiful\Kernel\Excel(['path' => './tests']);

$filePath = $excel
    ->fileName('tutorial.xlsx', 'test1')
    ->header(['sheet'])
    ->data([['test1']])
    ->addSheet('test2')
    ->header(['sheet'])
    ->data([['test2']])
    ->output();

$sheetList = $excel->openFile('tutorial.xlsx')
    ->sheetList();

foreach ($sheetList as $sheetName) {
    echo 'Sheet Name:' . $sheetName . PHP_EOL;

    $sheetData = $excel
        ->openSheet($sheetName)
        ->getSheetData();

    var_dump($sheetData);
}
```

## Sample output

```php
Sheet Name: test1
array(2) {
  [0]=>
  array(1) {
    [0]=>
    string(5) "sheet"
  }
  [1]=>
  array(1) {
    [0]=>
    string(5) "test1"
  }
}
Sheet Name: test2
array(2) {
  [0]=>
  array(1) {
    [0]=>
    string(5) "sheet"
  }
  [1]=>
  array(1) {
    [0]=>
    string(5) "test2"
  }
}
```
