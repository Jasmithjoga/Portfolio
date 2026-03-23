'use client';

import { useEffect, useRef } from 'react';

interface Skill {
  name: string;
  color: string;
  icon?: string; // devicon CDN icon path
}

interface SkillGlobeProps {
  skills: Skill[];
}

// Map skill names to devicon CDN icon paths
const DEVICON_BASE = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons';
const ICON_MAP: Record<string, string> = {
  'C++':         `${DEVICON_BASE}/cplusplus/cplusplus-original.svg`,
  'Java':        `${DEVICON_BASE}/java/java-original.svg`,
  'Python':      `${DEVICON_BASE}/python/python-original.svg`,
  'AWS':         `${DEVICON_BASE}/amazonwebservices/amazonwebservices-original-wordmark.svg`,
  'Docker':      `${DEVICON_BASE}/docker/docker-original.svg`,
  'Kubernetes':  `${DEVICON_BASE}/kubernetes/kubernetes-original.svg`,
  'Git':         `${DEVICON_BASE}/git/git-original.svg`,
  'PostgreSQL':  `${DEVICON_BASE}/postgresql/postgresql-original.svg`,
  'JavaScript':  `${DEVICON_BASE}/javascript/javascript-original.svg`,
  'TypeScript':  `${DEVICON_BASE}/typescript/typescript-original.svg`,
  'Go':          `${DEVICON_BASE}/go/go-original.svg`,
  'Node.js':     `${DEVICON_BASE}/nodejs/nodejs-original.svg`,
  'React.js':    `${DEVICON_BASE}/react/react-original.svg`,
  'Solidity':    `${DEVICON_BASE}/solidity/solidity-original.svg`,
  'Mongo DB':    `${DEVICON_BASE}/mongodb/mongodb-original.svg`,
  'Redux':       `${DEVICON_BASE}/redux/redux-original.svg`,
  'Next.js':     `${DEVICON_BASE}/nextjs/nextjs-original.svg`,
  'Firebase':    `${DEVICON_BASE}/firebase/firebase-original.svg`,
  'Redis':       `${DEVICON_BASE}/redis/redis-original.svg`,
  'Haskell':     `${DEVICON_BASE}/haskell/haskell-original.svg`,
  'Tailwind':    `${DEVICON_BASE}/tailwindcss/tailwindcss-original.svg`,
  'Material UI': `${DEVICON_BASE}/materialui/materialui-original.svg`,
  'Postman':     `${DEVICON_BASE}/postman/postman-original.svg`,
  'Rust':        `${DEVICON_BASE}/rust/rust-original.svg`,
};

export function SkillGlobe({ skills }: SkillGlobeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const SIZE = 680;
    canvas.width = SIZE;
    canvas.height = SIZE;
    const cx = SIZE / 2;
    const cy = SIZE / 2;
    const R = 240;
    const fov = 900;

    // ── Build 3D nodes ───────────────────────────────────────────────
    const nodes = skills.map((skill, i) => {
      const goldenRatio = (1 + Math.sqrt(5)) / 2;
      const theta = Math.acos(1 - (2 * (i + 0.5)) / skills.length);
      const phi = (2 * Math.PI * i) / goldenRatio;
      return {
        x: Math.sin(theta) * Math.cos(phi),
        y: Math.cos(theta),
        z: Math.sin(theta) * Math.sin(phi),
        skill,
      };
    });

    // ── Build icon img elements ──────────────────────────────────────
    const iconEls: HTMLImageElement[] = [];
    const labelEls: HTMLSpanElement[] = [];

    nodes.forEach((node) => {
      const wrapper = document.createElement('div');
      wrapper.style.cssText = `
        position:absolute; top:0; left:0;
        display:flex; flex-direction:column; align-items:center;
        pointer-events:none; transform-origin:center center;
        transition: opacity 0.15s;
      `;

      const img = document.createElement('img');
      img.src = ICON_MAP[node.skill.name] || '';
      img.style.cssText = `width:48px;height:48px;object-fit:contain;filter:drop-shadow(0 0 6px ${node.skill.color}88);`;
      img.alt = node.skill.name;

      const label = document.createElement('span');
      label.textContent = node.skill.name;
      label.style.cssText = `
        margin-top:4px; font-size:11px; font-weight:700;
        color:#fff; background:rgba(0,0,0,0.6);
        padding:2px 7px; border-radius:6px; white-space:nowrap;
        font-family: Inter, system-ui, sans-serif; letter-spacing:0.03em;
      `;

      wrapper.appendChild(img);
      wrapper.appendChild(label);
      container.appendChild(wrapper);
      iconEls.push(img);
      labelEls.push(label as any);
      (img as any).__wrapper = wrapper;
    });

    // ── Rotation state ───────────────────────────────────────────────
    let rotX = 0.3;
    let rotY = 0;
    let velX = 0;
    let velY = 0.005;
    let isDragging = false;
    let isHovered = false;
    let lastMouseX = 0;
    let lastMouseY = 0;

    const onMouseEnter = () => { isHovered = true; };
    const onMouseLeave = () => { isHovered = false; };

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      lastMouseX = e.clientX;
      lastMouseY = e.clientY;
      velX = 0; velY = 0;
    };
    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const dx = e.clientX - lastMouseX;
      const dy = e.clientY - lastMouseY;
      velY = dx * 0.006;
      velX = dy * 0.006;
      rotY += velY;
      rotX += velX;
      lastMouseX = e.clientX;
      lastMouseY = e.clientY;
    };
    const onMouseUp = () => { isDragging = false; };

    canvas.addEventListener('mousedown', onMouseDown);
    canvas.addEventListener('mouseenter', onMouseEnter);
    canvas.addEventListener('mouseleave', onMouseLeave);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    // ── 3D helpers ───────────────────────────────────────────────────
    const rotate = (x: number, y: number, z: number) => {
      const y1 = y * Math.cos(rotX) - z * Math.sin(rotX);
      const z1 = y * Math.sin(rotX) + z * Math.cos(rotX);
      const x2 = x * Math.cos(rotY) + z1 * Math.sin(rotY);
      const z2 = -x * Math.sin(rotY) + z1 * Math.cos(rotY);
      return { x: x2, y: y1, z: z2 };
    };

    const project = (x: number, y: number, z: number) => {
      const scale = fov / (fov + z * R);
      return { px: cx + x * R * scale, py: cy + y * R * scale, scale };
    };

    // ── Draw sphere grid ────────────────────────────────────────────
    const drawGrid = () => {
      const steps = 80;
      const frontAlpha = 0.8;
      const backAlpha  = 0.3;
      const lineW      = 1.2;
      // Draw latitudes
      for (let lat = -3; lat <= 3; lat++) {
        const angle = (lat / 4) * (Math.PI / 2);
        const r = Math.cos(angle);
        const yy = Math.sin(angle);
        ctx.beginPath();
        let first = true;
        for (let i = 0; i <= steps; i++) {
          const phi = (i / steps) * 2 * Math.PI;
          const xx = r * Math.cos(phi);
          const zz = r * Math.sin(phi);
          const { x, y, z } = rotate(xx, yy, zz);
          const { px, py } = project(x, y, z);
          const a = z > 0 ? frontAlpha : backAlpha;
          ctx.strokeStyle = `rgba(120,150,255,${a})`;
          ctx.lineWidth = lineW;
          if (first) { ctx.moveTo(px, py); first = false; }
          else ctx.lineTo(px, py);
        }
        ctx.stroke();
      }
      // Draw longitudes
      for (let lon = 0; lon < 8; lon++) {
        const phi = (lon / 8) * Math.PI;
        ctx.beginPath();
        let first = true;
        for (let i = 0; i <= steps; i++) {
          const theta = (i / steps) * Math.PI * 2;
          const xx = Math.cos(phi) * Math.sin(theta);
          const yy = Math.cos(theta);
          const zz = Math.sin(phi) * Math.sin(theta);
          const { x, y, z } = rotate(xx, yy, zz);
          const { px, py } = project(x, y, z);
          const a = z > 0 ? frontAlpha : backAlpha;
          ctx.strokeStyle = `rgba(120,150,255,${a})`;
          ctx.lineWidth = lineW;
          if (first) { ctx.moveTo(px, py); first = false; }
          else ctx.lineTo(px, py);
        }
        ctx.stroke();
      }
    };

    // ── Render loop ─────────────────────────────────────────────────
    const render = () => {
      if (!isDragging) {
        velY += (0.005 - velY) * 0.04;
        velX *= 0.95;
        rotY += velY;
        rotX += velX;
      }

      ctx.clearRect(0, 0, SIZE, SIZE);
      drawGrid();

      // Project nodes
      const projected = nodes.map((node, i) => {
        const { x, y, z } = rotate(node.x, node.y, node.z);
        const { px, py, scale } = project(x, y, z);
        return { px, py, scale, z, node, i };
      });

      // Draw connection lines on canvas
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dz = nodes[i].z - nodes[j].z;
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
          if (dist < 0.52) {
            const a = projected[i];
            const b = projected[j];
            const depth = Math.min(a.z, b.z);
            const alpha = (1 - dist / 0.52) * (depth > 0 ? 0.5 : 0.15);
            ctx.beginPath();
            ctx.moveTo(a.px, a.py);
            ctx.lineTo(b.px, b.py);
            ctx.strokeStyle = `rgba(140,160,255,${alpha})`;
            ctx.lineWidth = 0.9;
            ctx.stroke();
          }
        }
      }

      // Position HTML icons
      const containerRect = container.getBoundingClientRect();
      const scaleX = container.clientWidth / SIZE;
      const scaleY = container.clientHeight / SIZE;

      projected.forEach(({ px, py, scale, z, i }) => {
        const wrapper = (iconEls[i] as any).__wrapper as HTMLDivElement;
        if (!wrapper) return;

        const isFront = z > -0.2;
        const iconScale = Math.max(0.5, scale * 0.95);
        const opacity = isFront ? Math.min(1, 0.3 + z * 0.9) : 0.15;

        const finalX = px * scaleX;
        const finalY = py * scaleY;

        wrapper.style.transform = `translate(calc(${finalX}px - 50%), calc(${finalY}px - 50%)) scale(${iconScale})`;
        wrapper.style.opacity = String(opacity.toFixed(2));
        wrapper.style.zIndex = String(Math.round(z * 100 + 100));
      });

      animRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animRef.current);
      canvas.removeEventListener('mousedown', onMouseDown);
      canvas.removeEventListener('mouseenter', onMouseEnter);
      canvas.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      // Remove icon elements
      nodes.forEach((_, i) => {
        const wrapper = (iconEls[i] as any).__wrapper as HTMLDivElement;
        if (wrapper && wrapper.parentNode) wrapper.parentNode.removeChild(wrapper);
      });
    };
  }, [skills]);

  return (
    <div
      ref={containerRef}
      className="relative cursor-grab active:cursor-grabbing select-none mx-auto"
      style={{ width: '100%', maxWidth: '680px', aspectRatio: '1/1' }}
    >
      <canvas
        ref={canvasRef}
        style={{ width: '100%', height: '100%', display: 'block' }}
      />
    </div>
  );
}
