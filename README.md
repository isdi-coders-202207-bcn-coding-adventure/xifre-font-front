CODING ADVENTURE

1. ¿Cuándo tengo que usar useCallback()?

Cuando quiera devolver una versión memoizada de una función callback, que se le habrá pasado como argumento, para que cambie solo cuando cambie una de las dependencias del array de dependencias. El useCallback nos devolverá la misma función cada vez que se renderice el component, a menos que cambie una de las dependencias indicadas.

Lo usaremos para evitar que se re-renderice el componente cuando haya un cambio en el estado. Ello pasará cuando haya una función dentro del array de dependencias.
