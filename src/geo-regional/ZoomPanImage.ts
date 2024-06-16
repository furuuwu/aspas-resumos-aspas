export default class ZoomPanImage {
    private container: HTMLElement;
    private image: HTMLImageElement;

    // zooming
    private scale: number;
    private maxScale: number;
    private minScale: number;

    // panning
    private isPanning: boolean;
    private startX: number;
    private startY: number;
    private translateX: number;
    private translateY: number;

    constructor(containerSelector: string, options: { maxScale?: number, minScale?: number } = {}) {
        this.container = document.querySelector(containerSelector) as HTMLElement;
        this.image = this.container.querySelector('img') as HTMLImageElement;

        // zooming
        this.scale = 1;
        this.maxScale = options.maxScale || 3;
        this.minScale = options.minScale || 1;

        // panning
        this.isPanning = false;
        this.startX = 0;
        this.startY = 0;
        this.translateX = 0;
        this.translateY = 0;

        this.init();
    }

    private init() {
        // zooming
        this.container.addEventListener('wheel', (event) => this.onWheel(event));

        // panning
        this.container.addEventListener('mousedown', (event) => this.onMouseDown(event));
        this.container.addEventListener('mousemove', (event) => this.onMouseMove(event));
        this.container.addEventListener('mouseup', () => this.onMouseUp());
        this.container.addEventListener('mouseleave', () => this.onMouseUp());
    }

    private onWheel(event: WheelEvent) {
        event.preventDefault();

        if (event.deltaY < 0) {
            // Zoom in
            this.scale = Math.min(this.scale + 0.1, this.maxScale);
        } else {
            // Zoom out
            this.scale = Math.max(this.scale - 0.1, this.minScale);
        }

        this.updateTransform();
    }

    private onMouseDown(event: MouseEvent) {
        this.isPanning = true;
        this.startX = event.clientX - this.translateX;
        this.startY = event.clientY - this.translateY;
        this.container.style.cursor = 'grabbing';
    }

    private onMouseMove(event: MouseEvent) {
        if (!this.isPanning) return;

        this.translateX = event.clientX - this.startX;
        this.translateY = event.clientY - this.startY;

        this.updateTransform();
    }

    private onMouseUp() {
        this.isPanning = false;
        this.container.style.cursor = 'grab';
    }

    private updateTransform() {
        // image.style.transform = `scale(${scale})`;
        this.image.style.transform = `scale(${this.scale}) translate(${this.translateX}px, ${this.translateY}px)`;
    }
}