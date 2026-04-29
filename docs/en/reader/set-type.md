# Global read type

* Reader support is available on Windows in version `1.3.4.1` and later.
* The extension version must be `1.2.7` or later.
* When installing from PECL, answer `yes` when prompted to enable reader support.

## Function Prototype

```php
setType(array $type)
```

## Type array

The type array uses zero-based column indexes. For example, when the third column is a timestamp, configure it with index `2`:

```php
[
    2 => \Vtiful\Kernel\Excel::TYPE_TIMESTAMP,
]
```

## Test data preparation

```php
$config = ['path' => './tests'];
$excel = new \Vtiful\Kernel\Excel($config);

$filePath = $excel->fileName('tutorial.xlsx')
    ->header(['Name', 'Age', 'Date'])
    ->data([
        ['Viest', 24]
    ])
    ->insertDate(1, 2, 1568877706)
    ->output();
```

## Example

```php
$data = $excel->openFile('tutorial.xlsx')
    ->openSheet()
    ->setType([
        \Vtiful\Kernel\Excel::TYPE_STRING,
        \Vtiful\Kernel\Excel::TYPE_INT,
        \Vtiful\Kernel\Excel::TYPE_TIMESTAMP,
    ])
    ->getSheetData();

var_dump($data);
```

## Sample output

```php
array(2) {
  [0]=>
  array(3) {
    [0]=>
    string(4) "Name"
    [1]=>
    string(3) "Age"
    [2]=>
    string(4) "Date"
  }
  [1]=>
  array(3) {
    [0]=>
    string(5) "Viest"
    [1]=>
    int(24)
    [2]=>
    int(1568877706)
  }
}
```
