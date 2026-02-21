// ============================================
// PIXEL ART ASSETS - Professional Coherent Style
// ============================================

// Color Palette - Coherent retro style
const PALETTE = {
    // Player (Maria)
    maria: {
        skin: 0xf5d0c5,
        hair: 0x8b4513,
        dress: 0xe84393,
        dressShadow: 0xc44569,
        shoes: 0x2d3436,
        eyes: 0x2d3436
    },
    // Enemies
    slime: {
        body: 0x00b894,
        bodyDark: 0x00a884,
        eyes: 0xffffff,
        pupil: 0x2d3436
    },
    bat: {
        body: 0x6c5ce7,
        wing: 0x5541d7,
        eyes: 0xff7675
    },
    skeleton: {
        bone: 0xf5f5f5,
        boneDark: 0xdfe6e9,
        eye: 0xff0000
    },
    // Environment
    grass: {
        light: 0x27ae60,
        medium: 0x1e8449,
        dark: 0x145a32,
        flower: ['#e74c3c', '#f39c12', '#9b59b6', '#3498db']
    },
    tree: {
        trunk: 0x8b4513,
        trunkDark: 0x5d3a1a,
        leaf: 0x228b22,
        leafLight: 0x32cd32
    },
    stone: {
        light: 0x636e72,
        medium: 0x2d3436,
        dark: 0x1e272e
    },
    ui: {
        gold: 0xf1c40f,
        goldDark: 0xd4ac0d,
        health: 0xe74c3c,
        healthBg: 0x2d3436,
        mana: 0x3498db,
        panel: 0x1e272e,
        panelBorder: 0x636e72,
        text: '#ffffff',
        textShadow: '#2d3436'
    }
};

// ============================================
// SPRITE GENERATOR - All coherent pixel art
// ============================================

class PixelArt {
    // Draw a coherent sprite on canvas
    static draw(ctx, x, y, type, frame = 0) {
        ctx.save();
        ctx.translate(x, y);
        
        switch(type) {
            case 'player_idle':
                this.drawMariaIdle(ctx, frame);
                break;
            case 'player_walk':
                this.drawMariaWalk(ctx, frame);
                break;
            case 'player_attack':
                this.drawMariaAttack(ctx, frame);
                break;
            case 'slime':
                this.drawSlime(ctx, frame);
                break;
            case 'bat':
                this.drawBat(ctx, frame);
                break;
            case 'skeleton':
                this.drawSkeleton(ctx, frame);
                break;
            case 'tree':
                this.drawTree(ctx);
                break;
            case 'flower':
                this.drawFlower(ctx, frame);
                break;
            case 'rock':
                this.drawRock(ctx);
                break;
            case 'coin':
                this.drawCoin(ctx, frame);
                break;
            case 'heart':
                this.drawHeart(ctx);
                break;
            case 'potion':
                this.drawPotion(ctx, frame);
                break;
            case 'sword':
                this.drawSword(ctx);
                break;
            case 'shield':
                this.drawShield(ctx);
                break;
            case 'chest':
                this.drawChest(ctx, frame);
                break;
            case 'door':
                this.drawDoor(ctx);
                break;
            case 'bush':
                this.drawBush(ctx);
                break;
        }
        
        ctx.restore();
    }
    
    // Maria Idle - Coherent pixel girl
    static drawMariaIdle(ctx, frame) {
        const bounce = Math.sin(frame * 0.1) * 1;
        
        // Shadow
        ctx.fillStyle = 'rgba(0,0,0,0.3)';
        ctx.beginPath();
        ctx.ellipse(0, 18, 10, 4, 0, 0, Math.PI * 2);
        ctx.fill();
        
        // Body/Dress
        ctx.fillStyle = '#e84393';
        ctx.fillRect(-8, 2, 16, 14);
        ctx.fillStyle = '#c44569';
        ctx.fillRect(-8, 12, 16, 4);
        
        // Head
        ctx.fillStyle = '#f5d0c5';
        ctx.fillRect(-6, -10, 12, 12);
        
        // Hair
        ctx.fillStyle = '#8b4513';
        ctx.fillRect(-8, -14, 16, 6);
        ctx.fillRect(-10, -10, 4, 10);
        ctx.fillRect(6, -10, 4, 8);
        
        // Eyes
        ctx.fillStyle = '#2d3436';
        ctx.fillRect(-4, -6, 2, 3);
        ctx.fillRect(2, -6, 2, 3);
        
        // Mouth
        ctx.fillStyle = '#e17055';
        ctx.fillRect(-1, -1, 2, 1);
        
        // Legs
        ctx.fillStyle = '#f5d0c5';
        ctx.fillRect(-5, 16, 3, 4);
        ctx.fillRect(2, 16, 3, 4);
        
        // Shoes
        ctx.fillStyle = '#2d3436';
        ctx.fillRect(-6, 18, 5, 2);
        ctx.fillRect(1, 18, 5, 2);
    }
    
    // Maria Walking
    static drawMariaWalk(ctx, frame) {
        const walk = Math.sin(frame * 0.3) * 2;
        
        // Shadow
        ctx.fillStyle = 'rgba(0,0,0,0.3)';
        ctx.beginPath();
        ctx.ellipse(0, 18, 10, 4, 0, 0, Math.PI * 2);
        ctx.fill();
        
        // Dress (swinging)
        ctx.fillStyle = '#e84393';
        ctx.fillRect(-8 - walk, 2, 16, 14);
        ctx.fillStyle = '#c44569';
        ctx.fillRect(-8 - walk, 12, 16, 4);
        
        // Head
        ctx.fillStyle = '#f5d0c5';
        ctx.fillRect(-6, -10 + bounce, 12, 12);
        
        // Hair
        ctx.fillStyle = '#8b4513';
        ctx.fillRect(-8, -14 + bounce, 16, 6);
        ctx.fillRect(-10, -10 + bounce, 4, 10);
        ctx.fillRect(6, -10 + bounce, 4, 8);
        
        // Eyes
        ctx.fillStyle = '#2d3436';
        ctx.fillRect(-4, -6 + bounce, 2, 3);
        ctx.fillRect(2, -6 + bounce, 2, 3);
        
        // Legs (walking)
        ctx.fillStyle = '#f5d0c5';
        ctx.fillRect(-5 + walk, 16, 3, 4);
        ctx.fillRect(2 - walk, 16, 3, 4);
        
        ctx.fillStyle = '#2d3436';
        ctx.fillRect(-6 + walk, 18, 5, 2);
        ctx.fillRect(1 - walk, 18, 5, 2);
    }
    
    // Maria Attacking
    static drawMariaAttack(ctx, frame) {
        const swing = Math.sin(frame * 0.2) * 10;
        
        // Shadow
        ctx.fillStyle = 'rgba(0,0,0,0.3)';
        ctx.beginPath();
        ctx.ellipse(0, 18, 10, 4, 0, 0, Math.PI * 2);
        ctx.fill();
        
        // Body
        ctx.fillStyle = '#e84393';
        ctx.fillRect(-8, 2, 16, 14);
        
        // Head
        ctx.fillStyle = '#f5d0c5';
        ctx.fillRect(-6, -10, 12, 12);
        
        // Hair
        ctx.fillStyle = '#8b4513';
        ctx.fillRect(-8, -14, 16, 6);
        
        // Eyes (determined)
        ctx.fillStyle = '#2d3436';
        ctx.fillRect(-4, -6, 2, 3);
        ctx.fillRect(2, -6, 2, 3);
        
        // Sword (swinging)
        ctx.save();
        ctx.translate(10, 0);
        ctx.rotate(swing * Math.PI / 180);
        
        // Blade
        ctx.fillStyle = '#bdc3c7';
        ctx.fillRect(0, -2, 16, 4);
        ctx.fillStyle = '#ecf0f1';
        ctx.fillRect(0, -1, 14, 2);
        
        // Handle
        ctx.fillStyle = '#8b4513';
        ctx.fillRect(-4, -3, 4, 6);
        
        ctx.restore();
        
        // Legs
        ctx.fillStyle = '#2d3436';
        ctx.fillRect(-6, 18, 5, 2);
        ctx.fillRect(1, 18, 5, 2);
    }
    
    // Slime Enemy - Cute coherent
    static drawSlime(ctx, frame) {
        const squish = Math.sin(frame * 0.15) * 2;
        
        // Shadow
        ctx.fillStyle = 'rgba(0,0,0,0.3)';
        ctx.beginPath();
        ctx.ellipse(0, 12, 12, 4, 0, 0, Math.PI * 2);
        ctx.fill();
        
        // Body (blob shape)
        ctx.fillStyle = '#00b894';
        ctx.beginPath();
        ctx.ellipse(0, 4 - squish, 14 + squish, 12 - squish * 0.5, 0, 0, Math.PI * 2);
        ctx.fill();
        
        // Highlight
        ctx.fillStyle = '#55efc4';
        ctx.beginPath();
        ctx.ellipse(-4, 0, 4, 3, -0.3, 0, Math.PI * 2);
        ctx.fill();
        
        // Eyes
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(-6, 2, 4, 5);
        ctx.fillRect(2, 2, 4, 5);
        
        ctx.fillStyle = '#2d3436';
        ctx.fillRect(-5, 4, 2, 2);
        ctx.fillRect(3, 4, 2, 2);
    }
    
    // Bat
    static drawBat(ctx, frame) {
        const flap = Math.sin(frame * 0.3) * 8;
        
        // Body
        ctx.fillStyle = '#6c5ce7';
        ctx.beginPath();
        ctx.ellipse(0, 0, 6, 8, 0, 0, Math.PI * 2);
        ctx.fill();
        
        // Wings
        ctx.fillStyle = '#5541d7';
        ctx.beginPath();
        ctx.moveTo(-6, -2);
        ctx.lineTo(-16, -8 + flap);
        ctx.lineTo(-14, 2);
        ctx.lineTo(-6, 0);
        ctx.fill();
        
        ctx.beginPath();
        ctx.moveTo(6, -2);
        ctx.lineTo(16, -8 + flap);
        ctx.lineTo(14, 2);
        ctx.lineTo(6, 0);
        ctx.fill();
        
        // Ears
        ctx.fillStyle = '#6c5ce7';
        ctx.beginPath();
        ctx.moveTo(-4, -8);
        ctx.lineTo(-6, -14);
        ctx.lineTo(-2, -8);
        ctx.fill();
        
        ctx.beginPath();
        ctx.moveTo(4, -8);
        ctx.lineTo(6, -14);
        ctx.lineTo(2, -8);
        ctx.fill();
        
        // Eyes
        ctx.fillStyle = '#ff7675';
        ctx.fillRect(-3, -2, 2, 2);
        ctx.fillRect(1, -2, 2, 2);
    }
    
    // Skeleton
    static drawSkeleton(ctx, frame) {
        // Shadow
        ctx.fillStyle = 'rgba(0,0,0,0.3)';
        ctx.beginPath();
        ctx.ellipse(0, 16, 8, 3, 0, 0, Math.PI * 2);
        ctx.fill();
        
        // Skull
        ctx.fillStyle = '#f5f5f5';
        ctx.fillRect(-7, -8, 14, 12);
        
        // Eye sockets
        ctx.fillStyle = '#2d3436';
        ctx.fillRect(-5, -4, 3, 4);
        ctx.fillRect(2, -4, 3, 4);
        
        // Eye glow
        ctx.fillStyle = '#ff0000';
        ctx.fillRect(-4, -3, 1, 1);
        ctx.fillRect(3, -3, 1, 1);
        
        // Nose
        ctx.fillRect(-1, -1, 2, 2);
        
        // Teeth
        ctx.fillStyle = '#f5f5f5';
        ctx.fillRect(-4, 4, 2, 3);
        ctx.fillRect(0, 4, 2, 3);
        ctx.fillRect(2, 4, 2, 3);
        
        // Ribs
        ctx.fillStyle = '#dfe6e9';
        ctx.fillRect(-4, 8, 8, 2);
        ctx.fillRect(-5, 11, 10, 2);
        ctx.fillRect(-4, 14, 8, 2);
    }
    
    // Tree
    static drawTree(ctx) {
        // Shadow
        ctx.fillStyle = 'rgba(0,0,0,0.3)';
        ctx.beginPath();
        ctx.ellipse(0, 28, 20, 6, 0, 0, Math.PI * 2);
        ctx.fill();
        
        // Trunk
        ctx.fillStyle = '#8b4513';
        ctx.fillRect(-6, 10, 12, 20);
        ctx.fillStyle = '#5d3a1a';
        ctx.fillRect(-4, 12, 4, 16);
        
        // Leaves (layered)
        ctx.fillStyle = '#145a32';
        ctx.beginPath();
        ctx.arc(0, -5, 22, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.fillStyle = '#1e8449';
        ctx.beginPath();
        ctx.arc(-8, 0, 14, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.fillStyle = '#27ae60';
        ctx.beginPath();
        ctx.arc(8, 0, 14, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.fillStyle = '#2ecc71';
        ctx.beginPath();
        ctx.arc(0, -8, 12, 0, Math.PI * 2);
        ctx.fill();
    }
    
    // Flower
    static drawFlower(ctx, frame) {
        const colors = ['#e74c3c', '#f39c12', '#9b59b6', '#3498db'];
        const color = colors[frame % 4];
        
        // Stem
        ctx.fillStyle = '#27ae60';
        ctx.fillRect(-1, 0, 2, 12);
        
        // Petals
        ctx.fillStyle = color;
        for(let i = 0; i < 5; i++) {
            const angle = (i / 5) * Math.PI * 2;
            ctx.beginPath();
            ctx.arc(Math.cos(angle) * 4, Math.sin(angle) * 4 - 6, 3, 0, Math.PI * 2);
            ctx.fill();
        }
        
        // Center
        ctx.fillStyle = '#f1c40f';
        ctx.beginPath();
        ctx.arc(0, -6, 2, 0, Math.PI * 2);
        ctx.fill();
    }
    
    // Rock
    static drawRock(ctx) {
        ctx.fillStyle = '#636e72';
        ctx.beginPath();
        ctx.moveTo(-10, 8);
        ctx.lineTo(-8, -4);
        ctx.lineTo(0, -8);
        ctx.lineTo(8, -4);
        ctx.lineTo(10, 8);
        ctx.closePath();
        ctx.fill();
        
        ctx.fillStyle = '#2d3436';
        ctx.beginPath();
        ctx.moveTo(-4, -2);
        ctx.lineTo(2, -4);
        ctx.lineTo(4, 2);
        ctx.lineTo(-2, 4);
        ctx.closePath();
        ctx.fill();
    }
    
    // Coin
    static drawCoin(ctx, frame) {
        const shine = Math.sin(frame * 0.2) > 0;
        
        // Shadow
        ctx.fillStyle = 'rgba(0,0,0,0.3)';
        ctx.beginPath();
        ctx.ellipse(0, 6, 6, 2, 0, 0, Math.PI * 2);
        ctx.fill();
        
        // Coin body
        ctx.fillStyle = '#f1c40f';
        ctx.beginPath();
        ctx.arc(0, 0, 8, 0, Math.PI * 2);
        ctx.fill();
        
        // Inner circle
        ctx.fillStyle = '#d4ac0d';
        ctx.beginPath();
        ctx.arc(0, 0, 5, 0, Math.PI * 2);
        ctx.fill();
        
        // Shine
        if(shine) {
            ctx.fillStyle = '#ffeaa7';
            ctx.beginPath();
            ctx.arc(-2, -2, 2, 0, Math.PI * 2);
            ctx.fill();
        }
        
        // Dollar sign
        ctx.fillStyle = '#f1c40f';
        ctx.fillRect(-1, -4, 2, 8);
    }
    
    // Heart (health)
    static drawHeart(ctx) {
        ctx.fillStyle = '#e74c3c';
        
        // Top bumps
        ctx.beginPath();
        ctx.arc(-4, -2, 4, Math.PI, 0);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(4, -2, 4, Math.PI, 0);
        ctx.fill();
        
        // Bottom
        ctx.fillRect(-4, -2, 8, 8);
        ctx.beginPath();
        ctx.moveTo(-4, 6);
        ctx.lineTo(0, 2);
        ctx.lineTo(4, 6);
        ctx.fill();
        
        // Shine
        ctx.fillStyle = '#ff7675';
        ctx.beginPath();
        ctx.arc(-2, -1, 1.5, 0, Math.PI * 2);
        ctx.fill();
    }
    
    // Potion
    static drawPotion(ctx, frame) {
        const bubble = Math.sin(frame * 0.1) > 0;
        
        // Bottle
        ctx.fillStyle = '#3498db';
        ctx.beginPath();
        ctx.arc(0, 2, 8, 0, Math.PI * 2);
        ctx.fill();
        
        // Neck
        ctx.fillStyle = '#3498db';
        ctx.fillRect(-3, -8, 6, 8);
        
        // Cork
        ctx.fillStyle = '#8b4513';
        ctx.fillRect(-3, -10, 6, 3);
        
        // Shine
        ctx.fillStyle = '#74b9ff';
        ctx.beginPath();
        ctx.arc(-3, 0, 2, 0, Math.PI * 2);
        ctx.fill();
        
        // Bubble
        if(bubble) {
            ctx.fillStyle = 'rgba(255,255,255,0.6)';
            ctx.beginPath();
            ctx.arc(2, -2, 2, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    
    // Sword
    static drawSword(ctx) {
        // Blade
        ctx.fillStyle = '#bdc3c7';
        ctx.fillRect(-2, -16, 4, 20);
        
        // Blade highlight
        ctx.fillStyle = '#ecf0f1';
        ctx.fillRect(-1, -16, 1, 18);
        
        // Guard
        ctx.fillStyle = '#f1c40f';
        ctx.fillRect(-8, 2, 16, 4);
        
        // Handle
        ctx.fillStyle = '#8b4513';
        ctx.fillRect(-2, 6, 4, 8);
        
        // Pommel
        ctx.fillStyle = '#f1c40f';
        ctx.beginPath();
        ctx.arc(0, 15, 3, 0, Math.PI * 2);
        ctx.fill();
    }
    
    // Shield
    static drawShield(ctx) {
        // Shield body
        ctx.fillStyle = '#636e72';
        ctx.beginPath();
        ctx.moveTo(-12, -10);
        ctx.lineTo(12, -10);
        ctx.lineTo(12, 4);
        ctx.quadraticCurveTo(12, 14, 0, 16);
        ctx.quadraticCurveTo(-12, 14, -12, 4);
        ctx.closePath();
        ctx.fill();
        
        // Border
        ctx.strokeStyle = '#f1c40f';
        ctx.lineWidth = 2;
        ctx.stroke();
        
        // Cross
        ctx.fillStyle = '#f1c40f';
        ctx.fillRect(-2, -8, 4, 20);
        ctx.fillRect(-8, -2, 16, 4);
    }
    
    // Chest
    static drawChest(ctx, frame) {
        const isOpen = frame > 0;
        
        // Shadow
        ctx.fillStyle = 'rgba(0,0,0,0.3)';
        ctx.beginPath();
        ctx.ellipse(0, 14, 14, 4, 0, 0, Math.PI * 2);
        ctx.fill();
        
        // Body
        ctx.fillStyle = '#8b4513';
        ctx.fillRect(-12, 2, 24, 12);
        
        // Lid
        ctx.fillStyle = isOpen ? '#a0522d' : '#8b4513';
        if(isOpen) {
            ctx.fillRect(-12, -8, 24, 10);
        } else {
            ctx.fillRect(-12, -2, 24, 8);
        }
        
        // Lock
        ctx.fillStyle = '#f1c40f';
        ctx.fillRect(-3, 4, 6, 6);
        
        // Trim
        ctx.fillStyle = '#d4ac0d';
        ctx.fillRect(-12, 2, 24, 2);
        ctx.fillRect(-12, 12, 24, 2);
        
        // Shine
        ctx.fillStyle = 'rgba(255,255,255,0.2)';
        ctx.fillRect(-10, 4, 4, 8);
    }
    
    // Door
    static drawDoor(ctx) {
        // Frame
        ctx.fillStyle = '#5d3a1a';
        ctx.fillRect(-16, -20, 32, 40);
        
        // Door
        ctx.fillStyle = '#8b4513';
        ctx.fillRect(-12, -16, 24, 36);
        
        // Panels
        ctx.fillStyle = '#6b4423';
        ctx.fillRect(-10, -12, 8, 10);
        ctx.fillRect(2, -12, 8, 10);
        ctx.fillRect(-10, 2, 8, 10);
        ctx.fillRect(2, 2, 8, 10);
        
        // Handle
        ctx.fillStyle = '#f1c40f';
        ctx.beginPath();
        ctx.arc(6, 4, 2, 0, Math.PI * 2);
        ctx.fill();
    }
    
    // Bush
    static drawBush(ctx) {
        // Shadow
        ctx.fillStyle = 'rgba(0,0,0,0.3)';
        ctx.beginPath();
        ctx.ellipse(0, 10, 12, 4, 0, 0, Math.PI * 2);
        ctx.fill();
        
        // Leaves
        ctx.fillStyle = '#27ae60';
        ctx.beginPath();
        ctx.arc(-6, 4, 8, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.beginPath();
        ctx.arc(6, 4, 8, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.beginPath();
        ctx.arc(0, 0, 8, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.fillStyle = '#2ecc71';
        ctx.beginPath();
        ctx.arc(0, -2, 5, 0, Math.PI * 2);
        ctx.fill();
    }
}

// ============================================
// EFFECTS - Professional Game Juice
// ============================================

class Effects {
    static hitstop(scene, duration = 100) {
        scene.physics.pause();
        scene.time.delayedCall(duration, () => {
            scene.physics.resume();
        });
    }
    
    static screenShake(scene, intensity = 0.01, duration = 100) {
        scene.cameras.main.shake(duration, intensity);
    }
    
    static particles(scene, x, y, color, count = 10) {
        for(let i = 0; i < count; i++) {
            const p = scene.add.rectangle(
                x + Phaser.Math.Between(-10, 10),
                y + Phaser.Math.Between(-10, 10),
                4, 4, color
            );
            
            scene.tweens.add({
                targets: p,
                alpha: 0,
                x: x + Phaser.Math.Between(-30, 30),
                y: y + Phaser.Math.Between(-40, 0),
                duration: 300,
                ease: 'Power2',
                onComplete: () => p.destroy()
            });
        }
    }
    
    static flash(scene, color = 0xffffff, duration = 50) {
        const flash = scene.add.rectangle(400, 300, 800, 600, color, 0.5);
        scene.tweens.add({
            targets: flash,
            alpha: 0,
            duration: duration,
            onComplete: () => flash.destroy()
        });
    }
    
    static damageNumber(scene, x, y, damage) {
        const text = scene.add.text(x, y, `-${damage}`, {
            fontSize: '20px',
            color: '#ff0000',
            stroke: '#000',
            strokeThickness: 3
        }).setOrigin(0.5);
        
        scene.tweens.add({
            targets: text,
            y: y - 40,
            alpha: 0,
            duration: 800,
            ease: 'Power2',
            onComplete: () => text.destroy()
        });
    }
    
    static healNumber(scene, x, y, amount) {
        const text = scene.add.text(x, y, `+${amount}`, {
            fontSize: '20px',
            color: '#00ff00',
            stroke: '#000',
            strokeThickness: 3
        }).setOrigin(0.5);
        
        scene.tweens.add({
            targets: text,
            y: y - 40,
            alpha: 0,
            duration: 800,
            ease: 'Power2',
            onComplete: () => text.destroy()
        });
    }
    
    static coinCollect(scene, x, y) {
        const coin = scene.add.text(x, y, '💰', { fontSize: '24px' });
        
        scene.tweens.add({
            targets: coin,
            y: y - 50,
            alpha: 0,
            scale: 1.5,
            duration: 500,
            ease: 'Power2',
            onComplete: () => coin.destroy()
        });
    }
}

// Export for use
window.PixelArt = PixelArt;
window.Effects = Effects;
window.PALETTE = PALETTE;
