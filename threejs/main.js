import * as THREE from 'three';

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

const rendered = new THREE.WebGLRenderer()

// To render with low resolution, we pass in the 3rd argument 'false
rendered.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( rendered.domElement );

// BoxGeometry(width, height, depth)
const geometry = new THREE.BoxGeometry(1, 1, 1)
// All materials takes an object of properties
const material = new THREE.MeshBasicMaterial({ color: 0xCBC3E3 })
// Mesh applies the material to the geometry
const cube = new THREE.Mesh(geometry, material)
scene.add(cube)

camera.position.z = 5

// This creates a loop that causes the renderer to draw the scene every time the screen is refreshed
function animate() {
  // Recieves a callback function to be invoked before the render
  requestAnimationFrame(animate)
  rendered.render(scene, camera)
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
}

animate()
