# Intro

El objetivo de este ejercicio es que arranques trabajando cn Redux.

Tomaremos como punto de entrada la aplicación que muestra una lista de miembros
que pertenecen a una organización en Github (el ejemplo de inicio tiene harcodeado
_lemoncode_ como organización), vamos a añadir un input en el que el usuario pueda
teclear el nombre de la organización y al pulsar load pueda cargar la lista del grupo que
indiquemos.

Este ejemplo ya viene con la infraestructura de Redux configurada.

# Ejercicio

- Arranca con el proyecto que se encuentra en la carpeta _00_start_.

- Instala las dependencias.

```bash
npm install
```

- Arranca la aplicación y comprueba que funciona correctamente..

```bash
npm start
```

- La implementación actual muestra una lista de miembro que pertenecen a la organización
  _lemoncode_, esta no esta mal, pero nos gustaría que el usuario pudiera teclear el nombre
  de organización que quisiera, y al pulsar el botón pudiera ver la lista de miembros de la
  organización que hubiera tecleado (ejemplo de organizacines validas: microsoft, facebook).

> Esto lo tenemos que implementar utilizando Redux

- Pistas:

  - Sigue una aproximación progresiva.
  - Añadele el parametro para informar del nombre de organización al action creator
    _memberRequestAction_ (tienes que actualizar el action creator, el map del container
    y las props del componente)
  - En el component añade un _input_ y ponlo al lado del botón _load_.
  - Create un estado local que va a tener el nombre de la organización
    (aquí puedes transformar el _MemberAreaComponent_ a un componente de clase o
    crear uno que lo envuelva temporal).
  - Conectar el input con el local state.
  - Cuando lances la acción pasale en el parametro de organización el local
    state organización en vez del valor harcoeadedo "lemon".
  - Si te funciona bien ahora vamos a pasar esto a Redux:
    - Define un nuevo _action ID_ para actualizar el campo de organizacíon.
    - Crea un _action creator_ que devolver la acción con el id de la acción
      que hemos creado justo en el paso anterior, más el nuevo valor del campo.
    - Añade un nuevo reducer al _combinereducers_ area.
    - Crea el _updateFilterCallback_ y la propiedad _organizacion_ en el
      _memberComponent_.
    - Actualiza redux _connect_ en el contenedor.
    
# Para subir nota

Si quieres practicar más con React, aquí tienes una lista de desafios para añadir mejoras a esta aplicación:
If you want to play more with React here you have some proposals to enhance this excercise:

- Añade la librería material-ui y estila la aplicación (puedes mostrar los datos en una tabla o en cards...).
- Añade paginación al listado (te hara falta actualizar el UI y el cliente de api rest).
- Si pinchas en un miembro que navega a su página de detalle en el que podrás ver lo detalles de ese usuario (tiene que buscar la API de github para leer esos datos).
- (...)
