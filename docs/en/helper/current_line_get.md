# Get current line

Returns the current zero-based write row index.

## Function Prototype

```php
getCurrentLine(): int
```

## Example

```php
$config = [
    'path' => './tests'
];

$fileObject = new \Vtiful\Kernel\Excel($config);

$fileObject->fileName('tutorial.xlsx')
    ->header(['name', 'age'])
    ->data([
        ['viest', 21],
    ]);

var_dump($fileObject->getCurrentLine()); // 2
```
