import * as THREE from "three";

const canvas = document.getElementById("canvas");

const w = window.innerWidth;
const h = window.innerHeight;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, w / h, 1, 1000);

camera.position.z = 10;
scene.add(camera);

const renderer = new THREE.WebGLRenderer();

renderer.setSize(w, h);
renderer.setClearColor(0x000, 1);
canvas.appendChild(renderer.domElement);

renderer.render(scene, camera);
