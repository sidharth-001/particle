class particle{
	constructor(){
		this.pos = createVector(random(width),random(height));
		this.vel = createVector(random(-2,2),random(-2,2));
		this.size = 8;
	}
	draw(){
		noStroke();
		fill('rgba(255,255,255,0.5)');
		circle(this.pos.x, this.pos.y, this.size)
	}
	update(){
		this.pos.add(this.vel);
		this.edges();
	}
	edges(){
		if(this.pos.x < 0 || this.pos.x > width){
			this.vel.x *= -1;
		}
		if(this.pos.y < 0 || this.pos.y > height){
			this.vel.y *= -1;
		}
	}
	line(){
		particles.forEach((particle)=>{
			const dis = dist(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y);
			if(dis < 100){
				stroke('rgba(255,255,255,0.1)');
				line(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y);
			}
		});
	}
}

const particles = [];
function setup(){
	createCanvas(window.innerWidth, window.innerHeight);
	const noParticle = Math.floor(window.innerWidth/10);
	for(let i=0; i<noParticle; i++){
		particles.push(new particle);
	}
}

function draw(){
	background(41, 43, 44);
	particles.forEach((p,index)=>{
		p.update();
		p.draw();
		p.line(particles.slice(index));
	});
}