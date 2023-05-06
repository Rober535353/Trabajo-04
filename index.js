//Creacion de los fundamentos de configuracion: escena, camara y renderizador
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 )
const renderer = new THREE.WebGLRenderer({ antialias: true})

//Tamaño del renderizador y agregar cuerpo a la pagina
renderer.setSize( window.innerWidth, window.innerHeight )
document.body.appendChild( renderer.domElement )

//Creamos nuestro cubo
var geometry = new THREE.BoxGeometry( 1, 1, 1)
var material = new THREE.MeshStandardMaterial( { color: 0x000080 }) //Material reflectante
var cube = new THREE.Mesh ( geometry, material )
scene.add( cube )
renderer.render( scene, camera )

camera.position.z = 5

//Aplicamos una luz
var ambientLight = new THREE.AmbientLight ( 0xffffff, 0.5)
scene.add( ambientLight )

//Establecemos los puntos que debe iluminar la luz
var pointLight = new THREE.PointLight( 0xffffff, 1 );
pointLight.position.set( 25, 50, 25 );
scene.add( pointLight );

//Agregamos otro cubo, per con distintas propiedades
var geometry = new THREE.BoxGeometry( 3, 3, 3)
var material = new THREE.MeshBasicMaterial( { color: "#ff8000", wireframe: true, transparent: true })
var wireframeCube = new THREE.Mesh ( geometry, material )
scene.add( wireframeCube )

//Establecemos la animacion de los 2 cubos
function animate() {
    requestAnimationFrame( animate )
    cube.rotation.x += 0.04;
    cube.rotation.y += 0.04;
    wireframeCube.rotation.x -= 0.01;
    wireframeCube.rotation.y -= 0.01;
    renderer.render( scene, camera )
   }
animate()