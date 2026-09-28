'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface Hero3DCanvasProps {
  onLoaded?: () => void;
  className?: string;
}

export default function Hero3DCanvas({ onLoaded, className = '' }: Hero3DCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [webglSupported, setWebglSupported] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // WebGL support check
    try {
      const testCanvas = document.createElement('canvas');
      const gl = testCanvas.getContext('webgl') || testCanvas.getContext('experimental-webgl');
      if (!gl) {
        setWebglSupported(false);
        if (onLoaded) onLoaded();
        return;
      }
    } catch {
      setWebglSupported(false);
      if (onLoaded) onLoaded();
      return;
    }

    if (!canvasRef.current || !containerRef.current) return;

    // 1. Scene setup - Crisp Light Studio Environment
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0xf0f9ff, 0.03);

    // 2. Camera setup
    const container = containerRef.current;
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0.4, 8.5);

    // 3. Renderer setup
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;

    // 4. Studio Lighting setup with High-Contrast Specular Highlights
    const ambientLight = new THREE.AmbientLight(0xffffff, 2.2);
    scene.add(ambientLight);

    const mainLight = new THREE.DirectionalLight(0x0ea5e9, 4.2);
    mainLight.position.set(6, 8, 6);
    scene.add(mainLight);

    const rimLight1 = new THREE.DirectionalLight(0x0284c7, 3.0);
    rimLight1.position.set(-6, -4, 4);
    scene.add(rimLight1);

    const rimLight2 = new THREE.DirectionalLight(0x38bdf8, 2.2);
    rimLight2.position.set(0, -6, -4);
    scene.add(rimLight2);

    const pointLight = new THREE.PointLight(0x0ea5e9, 4.5, 14);
    pointLight.position.set(0, 0.5, 3);
    scene.add(pointLight);

    // 5. 3D Object Group (Authentic 3D Volumetric Alvision "A" Emblem Symbol)
    const brandGroup = new THREE.Group();
    brandGroup.position.set(0, 0.4, -0.5); // Floating slightly above center
    scene.add(brandGroup);

    // Shape 1: Outer "A" Chevron Crest
    const aShape = new THREE.Shape();
    aShape.moveTo(0, 2.4);
    aShape.lineTo(2.0, -1.8);
    aShape.lineTo(1.1, -1.8);
    aShape.lineTo(0, 0.4);
    aShape.lineTo(-1.1, -1.8);
    aShape.lineTo(-2.0, -1.8);
    aShape.closePath();

    // Inner triangle cutout (A hole)
    const innerHole = new THREE.Path();
    innerHole.moveTo(0, 1.6);
    innerHole.lineTo(0.55, 0.65);
    innerHole.lineTo(-0.55, 0.65);
    innerHole.closePath();
    aShape.holes.push(innerHole);

    // Extrude 3D 'A' Emblem Mesh with Deep 3D Bevels
    const aExtrudeSettings = {
      depth: 0.5,
      bevelEnabled: true,
      bevelSegments: 8,
      steps: 3,
      bevelSize: 0.08,
      bevelThickness: 0.08,
    };

    const aGeometry = new THREE.ExtrudeGeometry(aShape, aExtrudeSettings);
    aGeometry.center(); // Center pivot

    // Premium Alvision Metallic Blue Material
    const aMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x0ea5e9,
      emissive: 0x0284c7,
      emissiveIntensity: 0.3,
      metalness: 0.85,
      roughness: 0.15,
      clearcoat: 1.0,
      clearcoatRoughness: 0.08,
      reflectivity: 0.95,
    });

    const aMesh = new THREE.Mesh(aGeometry, aMaterial);
    brandGroup.add(aMesh);

    // Shape 2: Middle Sweeping Chevron Crossbar
    const barShape = new THREE.Shape();
    barShape.moveTo(-1.4, -0.3);
    barShape.quadraticCurveTo(0, 0.35, 1.4, -0.3);
    barShape.lineTo(1.1, -0.75);
    barShape.quadraticCurveTo(0, -0.1, -1.1, -0.75);
    barShape.closePath();

    const barGeometry = new THREE.ExtrudeGeometry(barShape, {
      depth: 0.55,
      bevelEnabled: true,
      bevelSegments: 5,
      steps: 2,
      bevelSize: 0.05,
      bevelThickness: 0.05,
    });
    barGeometry.center();

    const barMaterial = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      metalness: 0.9,
      roughness: 0.15,
      emissive: 0x0ea5e9,
      emissiveIntensity: 0.4,
    });

    const barMesh = new THREE.Mesh(barGeometry, barMaterial);
    barMesh.position.set(0, -0.35, 0.05);
    brandGroup.add(barMesh);

    // Shape 3: Central Glowing Aperture Orb Lens
    const orbGeometry = new THREE.SphereGeometry(0.32, 32, 32);
    const orbMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      emissive: 0x38bdf8,
      emissiveIntensity: 1.2,
      roughness: 0.1,
      metalness: 0.8,
    });
    const orbMesh = new THREE.Mesh(orbGeometry, orbMaterial);
    orbMesh.position.set(0, 0.5, 0.1);
    brandGroup.add(orbMesh);

    // Outer Orbital Ring 1
    const ring1Geometry = new THREE.TorusGeometry(3.4, 0.025, 16, 100);
    const ring1Material = new THREE.MeshStandardMaterial({
      color: 0x0ea5e9,
      metalness: 0.9,
      roughness: 0.1,
      emissive: 0x0284c7,
      emissiveIntensity: 0.4,
    });
    const ring1 = new THREE.Mesh(ring1Geometry, ring1Material);
    ring1.rotation.x = Math.PI / 3;
    brandGroup.add(ring1);

    // Outer Orbital Ring 2
    const ring2Geometry = new THREE.TorusGeometry(4.0, 0.015, 16, 100);
    const ring2Material = new THREE.MeshBasicMaterial({
      color: 0x0284c7,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const ring2 = new THREE.Mesh(ring2Geometry, ring2Material);
    ring2.rotation.y = Math.PI / 4;
    brandGroup.add(ring2);

    // 6. Particle Field (Sky Blue Floating Structure)
    const particleCount = 450;
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 16;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 16;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 16;
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

    const particleMaterial = new THREE.PointsMaterial({
      color: 0x0284c7,
      size: 0.065,
      transparent: true,
      opacity: 0.6,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    if (onLoaded) onLoaded();

    // 7. Scroll progress tracker & lerping variables
    let currentScroll = 0;
    let targetScroll = 0;

    const handleScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (maxScroll > 0) {
        targetScroll = Math.min(1, Math.max(0, window.scrollY / maxScroll));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // 8. Animation loop using performance.now()
    let animationFrameId: number;
    const startTime = performance.now();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = (performance.now() - startTime) / 1000;

      // Smooth scroll lerp (0.06 factor)
      currentScroll += (targetScroll - currentScroll) * 0.06;
      setScrollProgress(currentScroll);

      // Dynamic 3D Rotation showing off 3D Alvision 'A' Emblem Symbol
      brandGroup.position.y = 0.4 + Math.sin(elapsedTime * 1.5) * 0.15;
      brandGroup.rotation.y = Math.sin(elapsedTime * 0.9) * 0.45 + currentScroll * Math.PI * 1.5;
      brandGroup.rotation.x = Math.cos(elapsedTime * 0.7) * 0.15 + currentScroll * Math.PI * 0.3;

      ring1.rotation.z = elapsedTime * 0.3 + currentScroll * Math.PI;
      ring2.rotation.x = -elapsedTime * 0.25 - currentScroll * Math.PI * 1.2;

      particles.rotation.y = elapsedTime * 0.05 + currentScroll * Math.PI * 0.5;

      // Scroll-driven camera & transformation lerp
      const cameraZ = 8.5 - currentScroll * 3.5;
      const cameraY = 0.4 + Math.sin(currentScroll * Math.PI * 2) * 0.6;
      const cameraX = Math.cos(currentScroll * Math.PI * 1.5) * 0.4;

      camera.position.z += (cameraZ - camera.position.z) * 0.08;
      camera.position.y += (cameraY - camera.position.y) * 0.08;
      camera.position.x += (cameraX - camera.position.x) * 0.08;
      camera.lookAt(0, 0.3, 0);

      // Dynamic lighting pulse based on scroll & time
      pointLight.intensity = 4.5 + Math.sin(elapsedTime * 2) * 1.2 + currentScroll * 2.0;

      renderer.render(scene, camera);
    };

    animate();

    // 9. Resize handler
    const handleResize = () => {
      if (!containerRef.current || !renderer || !camera) return;
      const w = containerRef.current.clientWidth || window.innerWidth;
      const h = containerRef.current.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);

      aGeometry.dispose();
      aMaterial.dispose();
      barGeometry.dispose();
      barMaterial.dispose();
      orbGeometry.dispose();
      orbMaterial.dispose();
      ring1Geometry.dispose();
      ring1Material.dispose();
      ring2Geometry.dispose();
      ring2Material.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      renderer.dispose();
    };
  }, [onLoaded]);

  // Fallback rendering official Alvision Media SVG Logo Emblem
  if (!webglSupported) {
    return (
      <div className={`relative w-full h-full flex items-center justify-center overflow-hidden bg-[#F0F9FF] ${className}`}>
        <div className="relative w-64 h-64 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-sky-400/20 blur-3xl animate-pulse" />
          <img 
            src="/images/alvision-logo.svg" 
            alt="Alvision Media Symbol Emblem" 
            className="w-44 h-44 object-contain animate-float-slow"
          />
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className={`relative w-full h-full ${className}`}>
      <canvas ref={canvasRef} className="w-full h-full block pointer-events-none" />
      
      {/* Scroll indicator overlay */}
      <div 
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 pointer-events-none transition-opacity duration-500"
        style={{ opacity: Math.max(0, 1 - scrollProgress * 4) }}
      >
        <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-sky-600 font-inter">
          Scroll to explore
        </span>
        <div className="w-5 h-9 rounded-full border-2 border-sky-500/40 flex items-start justify-center p-1">
          <div className="w-1.5 h-2.5 rounded-full bg-sky-500 animate-bounce" />
        </div>
      </div>
    </div>
  );
}
