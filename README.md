CODING ADVENTURE

1. ¿Cuándo tengo que usar useCallback()?

Cuando necesite memoizar una función, esto es, guarda el valor resuelto por la función y solo lo recalcula cuando cambia el array de dependencias (del propio useCallback). Así ahorramos realizar cálculos pesados varias veces. Es como useRef() pero sirve para almacenar una función callback entera, y no solo un valor.
