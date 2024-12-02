export function createBackground() {
    const skyBackground = document.createElement('div');
    skyBackground.className = 'sky-background';

    // Create clouds
    const cloud1 = document.createElement('div');
    cloud1.className = 'cloud cloud-1';
    
    const cloud2 = document.createElement('div');
    cloud2.className = 'cloud cloud-2';

    // Create flowers
    const flowers = Array(3).fill(null).map((_, index) => {
        const flower = document.createElement('div');
        flower.className = `flower flower-${index + 1}`;
        
        // Create petals
        Array(5).fill(null).forEach(() => {
            const petal = document.createElement('div');
            petal.className = 'petal';
            flower.appendChild(petal);
        });

        // Create flower center
        const center = document.createElement('div');
        center.className = 'flower-center';
        flower.appendChild(center);

        // Create stem
        const stem = document.createElement('div');
        stem.className = 'stem';
        flower.appendChild(stem);

        return flower;
    });

    // Append elements
    skyBackground.appendChild(cloud1);
    skyBackground.appendChild(cloud2);
    flowers.forEach(flower => skyBackground.appendChild(flower));

    document.body.insertBefore(skyBackground, document.body.firstChild);
}