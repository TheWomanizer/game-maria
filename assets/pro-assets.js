// ============================================
// MARIA & THE ROBOT GARDEN - PRO ASSETS SYSTEM
// ============================================
// All sprites generated programmatically - CC0 compatible
// Based on professional pixel art conventions

const PRO_ASSETS = {
    // ============================================
    // COLOR PALETTES (coherent throughout game)
    // ============================================
    palettes: {
        // Main player (Maria) - cozy farming style
        maria: {
            skin: 0xf5d0c5,
            hair: 0x8b4513,
            dress: 0xe84393,
            dressShadow: 0xc44569,
            shoes: 0x2d3436,
            eyes: 0x2d3436
        },
        // NPCs
        jose: {
            skin: 0xf5d0c5,
            hair: 0x2d3436,
            shirt: 0x3498db,
            pants: 0x2c3e50
        },
        celeste: {
            skin: 0xf5d0c5,
            hair: 0xe74c3c,
            dress: 0x9b59b6
        },
        // Enemies - varied but cohesive
        slime: {
            body: 0x00b894,
            bodyLight: 0x55efc4,
            bodyDark: 0x00a884,
            eyes: 0xffffff,
            pupil: 0x2d3436
        },
        bat: {
            body: 0x6c5ce7,
            bodyDark: 0x5541d7,
            eyes: 0xff7675
        },
        skeleton: {
            bone: 0xf5f5f5,
            boneDark: 0xdfe6e9,
            eyeGlow: 0xff0000
        },
        ghost: {
            body: 0xa29bfe,
            bodyDark: 0x6c5ce7,
            eyes: 0x2d3436
        },
        // Environment
        grass: {
            light: 0x27ae60,
            medium: 0x1e8449,
            dark: 0x145a32,
            flower: [0xe74c3c, 0xf39c12, 0x9b59b6, 0x3498db, 0xffffff]
        },
        tree: {
            trunk: 0x8b4513,
            trunkDark: 0x5d3a1a,
            leaf: 0x228b22,
            leafLight: 0x2ecc71,
            leafDark: 0x145a32
        },
        building: {
            wall: 0x8b7355,
            wallDark: 0x5d4e37,
            roof: 0xc0392b,
            roofDark: 0x922b21,
            door: 0x5d3a1a,
            window: 0x87ceeb,
            windowFrame: 0x2c3e50
        },
        church: {
            wall: 0xf5f5f5,
            wallDark: 0xbdc3c7,
            roof: 0x2c3e50,
            door: 0x5d3a1a,
            cross: 0xf1c40f,
            stainedGlass: 0x9b59b6
        },
        ui: {
            gold: 0xf1c40f,
            goldDark: 0xd4ac0d,
            health: 0xe74c3c,
            healthBg: 0x2d3436,
            mana: 0x3498db,
            xp: 0x9b59b6,
            panel: 0x1e272e,
            panelBorder: 0x636e72,
            text: '#ffffff',
            textShadow: '#2d3436',
            textGold: '#ffd700'
        }
    },

    // ============================================
    // SPRITE DEFINITIONS
    // ============================================
    sprites: {
        // Player (Maria) - 32x32 logical size
        player_idle: {
            frames: 4,
            speed: 200,
            width: 24,
            height: 32,
            anchor: { x: 0.5, y: 1 }
        },
        player_walk: {
            frames: 4,
            speed: 150,
            width: 24,
            height: 32
        },
        player_attack: {
            frames: 3,
            speed: 100,
            width: 32,
            height: 32
        },
        // Enemies
        slime_idle: {
            frames: 2,
            speed: 400,
            width: 28,
            height: 24
        },
        bat_fly: {
            frames: 2,
            speed: 200,
            width: 24,
            height: 16
        },
        skeleton_walk: {
            frames: 2,
            speed: 300,
            width: 20,
            height: 32
        },
        // Environment
        tree: {
            frames: 1,
            width: 48,
            height: 64
        },
        flower: {
            frames: 4,
            speed: 500,
            width: 16,
            height: 16
        },
        rock: {
            frames: 1,
            width: 24,
            height: 16
        },
        coin: {
            frames: 4,
            speed: 150,
            width: 16,
            height: 16
        },
        heart: {
            frames: 1,
            width: 16,
            height: 16
        },
        potion: {
            frames: 2,
            speed: 300,
            width: 16,
            height: 24
        }
    },

    // ============================================
    // TILESETS (32x32 standard)
    // ============================================
    tiles: {
        grass: [0x27ae60, 0x1e8449, 0x145a32],
        path: 0x8b7355,
        water: 0x3498db,
        wall: 0x5d4e37,
        floor: 0x636e72
    }
};

// ============================================
// RENDERER - Draws all sprites programmatically
// ============================================
class ProRenderer {
    static drawPlayer(ctx, x, y, state = 'idle', frame = 0, direction = 1) {
        const p = PRO_ASSETS.palettes.maria;
        const bounce = Math.sin(frame * 0.15) * 1;
        
        ctx.save();
        ctx.translate(x, y);
        if (direction < 0) ctx.scale(-1, 1);
        
        // Shadow
        ctx.fillStyle = 'rgba(0,0,0,0.3)';
        ctx.beginPath();
        ctx.ellipse(0, 0, 10, 4, 0, 0, Math.PI * 2);
        ctx.fill();
        
        if (state === 'idle') {
            // Dress
            ctx.fillStyle = '#' + p.dress.toString(16).padStart(6, '0');
            ctx.fillRect(-8, -22 + bounce, 16, 20);
            ctx.fillStyle = '#' + p.dressShadow.toString(16).padStart(6, '0');
            ctx.fillRect(-8, -8, 16, 6);
            
            // Head
            ctx.fillStyle = '#' + p.skin.toString(16).padStart(6, '0');
            ctx.fillRect(-6, -28 + bounce, 12, 12);
            
            // Hair
            ctx.fillStyle = '#' + p.hair.toString(16).padStart(6, '0');
            ctx.fillRect(-7, -32 + bounce, 14, 6);
            ctx.fillRect(-8, -28 + bounce, 3, 10);
            ctx.fillRect(5, -28 + bounce, 3, 8);
            
            // Eyes
            ctx.fillStyle = '#' + p.eyes.toString(16).padStart(6, '0');
            ctx.fillRect(-3, -24 + bounce, 2, 3);
            ctx.fillRect(1, -24 + bounce, 2, 3);
            
            // Mouth
            ctx.fillStyle = '#e17055';
            ctx.fillRect(-1, -20 + bounce, 2, 1);
            
            // Legs
            ctx.fillStyle = '#' + p.skin.toString(16).padStart(6, '0');
            ctx.fillRect(-4, -2, 3, 4);
            ctx.fillRect(1, -2, 3, 4);
            
            // Shoes
            ctx.fillStyle = '#' + p.shoes.toString(16).padStart(6, '0');
            ctx.fillRect(-5, 0, 5, 2);
            ctx.fillRect(0, 0, 5, 2);
        }
        
        ctx.restore();
    }
    
    static drawSlime(ctx, x, y, frame = 0) {
        const s = PRO_ASSETS.palettes.slime;
        const squish = Math.sin(frame * 0.2) * 2;
        
        // Shadow
        ctx.fillStyle = 'rgba(0,0,0,0.3)';
        ctx.beginPath();
        ctx.ellipse(x, y + 8, 12, 4, 0, 0, Math.PI * 2);
        ctx.fill();
        
        // Body
        ctx.fillStyle = '#' + s.body.toString(16).padStart(6, '0');
        ctx.beginPath();
        ctx.ellipse(x, y - squish, 14 + squish, 12 - squish * 0.5, 0, 0, Math.PI * 2);
        ctx.fill();
        
        // Highlight
        ctx.fillStyle = '#' + s.bodyLight.toString(16).padStart(6, '0');
        ctx.beginPath();
        ctx.ellipse(x - 4, y - 2 - squish, 5, 3, -0.3, 0, Math.PI * 2);
        ctx.fill();
        
        // Eyes
        ctx.fillStyle = '#' + s.eyes.toString(16).padStart(6, '0');
        ctx.fillRect(x - 5, y - 2 - squish, 3, 4);
        ctx.fillRect(x + 2, y - 2 - squish, 3, 4);
        
        // Pupils
        ctx.fillStyle = '#' + s.pupil.toString(16).padStart(6, '0');
        ctx.fillRect(x - 4, y - 1 - squish, 1, 2);
        ctx.fillRect(x + 3, y - 1 - squish, 1, 2);
    }
    
    static drawTree(ctx, x, y) {
        const t = PRO_ASSETS.palettes.tree;
        
        // Shadow
        ctx.fillStyle = 'rgba(0,0,0,0.3)';
        ctx.beginPath();
        ctx.ellipse(x, y + 28, 24, 8, 0, 0, Math.PI * 2);
        ctx.fill();
        
        // Trunk
        ctx.fillStyle = '#' + t.trunk.toString(16).padStart(6, '0');
        ctx.fillRect(x - 6, y, 12, 28);
        ctx.fillStyle = '#' + t.trunkDark.toString(16).padStart(6, '0');
        ctx.fillRect(x - 4, y + 2, 4, 24);
        
        // Foliage layers
        ctx.fillStyle = '#' + t.leafDark.toString(16).padStart(6, '0');
        ctx.beginPath();
        ctx.arc(x, y - 8, 24, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.fillStyle = '#' + t.leaf.toString(16).padStart(6, '0');
        ctx.beginPath();
        ctx.arc(x - 10, y - 2, 16, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(x + 10, y - 2, 16, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.fillStyle = '#' + t.leafLight.toString(16).padStart(6, '0');
        ctx.beginPath();
        ctx.arc(x, y - 12, 14, 0, Math.PI * 2);
        ctx.fill();
    }
    
    static drawBuilding(ctx, x, y, type) {
        const b = PRO_ASSETS.palettes.building;
        
        if (type === 'house') {
            // Base
            ctx.fillStyle = '#' + b.wall.toString(16).padStart(6, '0');
            ctx.fillRect(x - 30, y - 10, 60, 50);
            ctx.strokeStyle = '#' + b.wallDark.toString(16).padStart(6, '0');
            ctx.lineWidth = 2;
            ctx.strokeRect(x - 30, y - 10, 60, 50);
            
            // Roof
            ctx.fillStyle = '#' + b.roof.toString(16).padStart(6, '0');
            ctx.beginPath();
            ctx.moveTo(x - 35, y - 10);
            ctx.lineTo(x, y - 45);
            ctx.lineTo(x + 35, y - 10);
            ctx.closePath();
            ctx.fill();
            
            // Door
            ctx.fillStyle = '#' + b.door.toString(16).padStart(6, '0');
            ctx.fillRect(x - 7, y + 15, 14, 25);
            
            // Windows
            ctx.fillStyle = '#' + b.window.toString(16).padStart(6, '0');
            ctx.fillRect(x - 20, y + 5, 10, 10);
            ctx.fillRect(x + 10, y + 5, 10, 10);
            ctx.strokeStyle = '#' + b.windowFrame.toString(16).padStart(6, '0');
            ctx.strokeRect(x - 20, y + 5, 10, 10);
            ctx.strokeRect(x + 10, y + 5, 10, 10);
        }
    }
    
    static drawCoin(ctx, x, y, frame = 0) {
        const u = PRO_ASSETS.palettes.ui;
        const shine = Math.sin(frame * 0.2) > 0;
        
        // Shadow
        ctx.fillStyle = 'rgba(0,0,0,0.3)';
        ctx.beginPath();
        ctx.ellipse(x, y + 6, 6, 2, 0, 0, Math.PI * 2);
        ctx.fill();
        
        // Coin
        ctx.fillStyle = '#' + u.gold.toString(16).padStart(6, '0');
        ctx.beginPath();
        ctx.arc(x, y, 8, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.fillStyle = '#' + u.goldDark.toString(16).padStart(6, '0');
        ctx.beginPath();
        ctx.arc(x, y, 5, 0, Math.PI * 2);
        ctx.fill();
        
        if (shine) {
            ctx.fillStyle = '#ffeaa7';
            ctx.beginPath();
            ctx.arc(x - 2, y - 2, 2, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    
    static drawHeart(ctx, x, y) {
        const u = PRO_ASSETS.palettes.ui;
        
        ctx.fillStyle = '#' + u.health.toString(16).padStart(6, '0');
        
        // Draw heart shape
        ctx.beginPath();
        ctx.moveTo(x, y + 4);
        ctx.bezierCurveTo(x - 8, y - 4, x - 8, y - 10, x, y - 6);
        ctx.bezierCurveTo(x + 8, y - 10, x + 8, y - 4, x, y + 4);
        ctx.fill();
        
        // Shine
        ctx.fillStyle = '#ff7675';
        ctx.beginPath();
        ctx.arc(x - 2, y - 4, 2, 0, Math.PI * 2);
        ctx.fill();
    }
    
    static drawPotion(ctx, x, y, frame = 0) {
        const u = PRO_ASSETS.palettes.ui;
        const bubble = Math.sin(frame * 0.15) > 0;
        
        // Bottle
        ctx.fillStyle = '#' + u.mana.toString(16).padStart(6, '0');
        ctx.beginPath();
        ctx.arc(x, y + 2, 8, 0, Math.PI * 2);
        ctx.fill();
        
        // Neck
        ctx.fillRect(x - 3, y - 8, 6, 8);
        
        // Cork
        ctx.fillStyle = '#8b4513';
        ctx.fillRect(x - 3, y - 11, 6, 3);
        
        // Shine
        ctx.fillStyle = '#74b9ff';
        ctx.beginPath();
        ctx.arc(x - 3, y, 2, 0, Math.PI * 2);
        ctx.fill();
        
        // Bubble
        if (bubble) {
            ctx.fillStyle = 'rgba(255,255,255,0.6)';
            ctx.beginPath();
            ctx.arc(x + 2, y - 2, 2, 0, Math.PI * 2);
            ctx.fill();
        }
    }
}

// ============================================
// EFFECTS SYSTEM
// ============================================
class ProEffects {
    static hitstop(scene, duration = 100) {
        scene.physics.pause();
        scene.time.delayedCall(duration, () => scene.physics.resume());
    }
    
    static screenShake(scene, intensity = 0.01, duration = 100) {
        scene.cameras.main.shake(duration, intensity);
    }
    
    static particles(scene, x, y, color, count = 10) {
        for (let i = 0; i < count; i++) {
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
    
    static flash(scene, color = 0xffffff, duration = 50) {
        const flash = scene.add.rectangle(400, 300, 800, 600, color, 0.5);
        scene.tweens.add({
            targets: flash,
            alpha: 0,
            duration: duration,
            onComplete: () => flash.destroy()
        });
    }
}

// Export
window.PRO_ASSETS = PRO_ASSETS;
window.ProRenderer = ProRenderer;
window.ProEffects = ProEffects;
