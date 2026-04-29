# Check worksheet existence

Use `existSheet()` to check whether a worksheet has already been added to the current workbook.

## Function Prototype

```php
existSheet(string $sheetName): bool
```

## Example

```php
$config = ['path' => './tests'];

$fileObject = new \Vtiful\Kernel\Excel($config);

$fileObject->fileName('tutorial.xlsx')
    ->addSheet('twoSheet');

var_dump($fileObject->existSheet('twoSheet'));
var_dump($fileObject->existSheet('notFoundSheet'));
```

## Sample output

```php
bool(true)
bool(false)
```
