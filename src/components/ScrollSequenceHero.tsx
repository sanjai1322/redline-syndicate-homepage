import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const TOTAL_FRAMES = 79;

const ScrollSequenceHero = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [loaded, setLoaded] = useState(false);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Map scroll progress (0 to 1) to frame index (1 to 79)
    const frameIndex = useTransform(scrollYProgress, [0, 1], [1, TOTAL_FRAMES]);

    // Preload images
    useEffect(() => {
        const preload = async () => {
            const loadedImages = await Promise.all(
                Array.from({ length: TOTAL_FRAMES }, (_, i) => {
                    return new Promise<HTMLImageElement>((resolve) => {
                        const img = new Image();
                        // Path relative to the public root when running via Vite
                        img.src = `/assets/hero-sequence/ezgif-frame-${String(i + 1).padStart(3, "0")}.jpg`;
                        img.onload = () => resolve(img);
                        img.onerror = () => {
                            console.error(`Failed to load image: ${img.src}`);
                            resolve(img); // Avoid blocking promise.all
                        };
                    });
                })
            );
            setImages(loadedImages.filter(img => img.complete));
            setLoaded(true);
        };
        preload();
    }, []);

    // Update canvas when frameIndex changes
    useEffect(() => {
        const render = () => {
            const canvas = canvasRef.current;
            if (!canvas || images.length === 0) return;
            const ctx = canvas.getContext("2d");
            if (!ctx) return;

            const currentFrame = Math.floor(frameIndex.get());
            const img = images[Math.min(currentFrame - 1, images.length - 1)];
            if (!img || !img.complete) return;

            // Handle high DPI
            const dpr = window.devicePixelRatio || 1;
            const rect = canvas.getBoundingClientRect();
            canvas.width = rect.width * dpr;
            canvas.height = rect.height * dpr;

            const canvasWidth = canvas.width;
            const canvasHeight = canvas.height;
            const imgWidth = img.width;
            const imgHeight = img.height;

            // Object-fit: cover logic
            const ratio = Math.max(canvasWidth / imgWidth, canvasHeight / imgHeight);
            const newWidth = imgWidth * ratio;
            const newHeight = imgHeight * ratio;
            const x = (canvasWidth - newWidth) / 2;
            const y = (canvasHeight - newHeight) / 2;

            ctx.clearRect(0, 0, canvasWidth, canvasHeight);
            ctx.imageSmoothingEnabled = true;
            ctx.imageSmoothingQuality = "high";
            ctx.drawImage(img, x, y, newWidth, newHeight);
        };

        const unsubscribe = frameIndex.on("change", render);

        // Initial render and render on load
        if (loaded) render();

        return () => unsubscribe();
    }, [images, frameIndex, loaded]);

    // Map scroll progress to text content
    const textOpacity1 = useTransform(scrollYProgress, [0, 0.15, 0.25], [0, 1, 0]);
    const textOpacity2 = useTransform(scrollYProgress, [0.3, 0.45, 0.55], [0, 1, 0]);
    const textOpacity3 = useTransform(scrollYProgress, [0.6, 0.75, 0.85], [0, 1, 0]);
    const textOpacity4 = useTransform(scrollYProgress, [0.9, 0.95, 1], [0, 1, 1]);

    const textY1 = useTransform(scrollYProgress, [0, 0.15], [20, 0]);
    const textY2 = useTransform(scrollYProgress, [0.3, 0.45], [20, 0]);
    const textY3 = useTransform(scrollYProgress, [0.6, 0.75], [20, 0]);
    const textY4 = useTransform(scrollYProgress, [0.9, 0.95], [20, 0]);

    return (
        <div ref={containerRef} className="relative h-[400vh] bg-black">
            <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
                <canvas
                    ref={canvasRef}
                    className="w-full h-full object-cover pointer-events-none brightness-[0.7] grayscale-[0.2]"
                    style={{ width: "100%", height: "100%" }}
                />

                {/* Dynamic Text Overlays (Off-center: Bottom Left) */}
                <div className="absolute bottom-20 left-12 lg:left-24 z-20 pointer-events-none text-left">
                    <motion.div style={{ opacity: textOpacity1, y: textY1 }} className="absolute inset-0 whitespace-nowrap">
                        <h2 className="font-display text-4xl md:text-6xl text-white tracking-widest uppercase">Engineering <span className="text-primary italic">Purity</span></h2>
                        <p className="text-white/40 text-[10px] tracking-[0.5em] mt-4 font-bold uppercase">The ultimate driving machine</p>
                    </motion.div>

                    <motion.div style={{ opacity: textOpacity2, y: textY2 }} className="absolute inset-0 whitespace-nowrap">
                        <h2 className="font-display text-4xl md:text-6xl text-white tracking-widest uppercase">Mechanical <span className="text-primary italic">Evolution</span></h2>
                        <p className="text-white/40 text-[10px] tracking-[0.5em] mt-4 font-bold uppercase">Forged in the fires of precision</p>
                    </motion.div>

                    <motion.div style={{ opacity: textOpacity3, y: textY3 }} className="absolute inset-0 whitespace-nowrap">
                        <h2 className="font-display text-4xl md:text-6xl text-white tracking-widest uppercase">Beyond <span className="text-primary italic">Performance</span></h2>
                        <p className="text-white/40 text-[10px] tracking-[0.5em] mt-4 font-bold uppercase">Mastering the core elements</p>
                    </motion.div>

                    <motion.div style={{ opacity: textOpacity4, y: textY4 }} className="absolute inset-0 whitespace-nowrap">
                        <h2 className="font-display text-4xl md:text-6xl text-white tracking-widest uppercase">Syndicate <span className="text-primary italic">DNA</span></h2>
                        <p className="text-white/40 text-[10px] tracking-[0.5em] mt-4 font-bold uppercase">Unleash the machine</p>
                    </motion.div>
                </div>

                {/* Matte Overlays for Depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40 opacity-80" />
                <div className="absolute inset-0 shadow-[inset_0_0_300px_rgba(0,0,0,0.9)]" />

                {/* Loading Indicator */}
                {!loaded && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black gap-4">
                        <div className="w-16 h-[1px] bg-primary animate-pulse" />
                        <span className="text-primary font-display text-xs tracking-[0.5em] uppercase">Initializing Transformation</span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ScrollSequenceHero;
