import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { render, screen } from '@testing-library/angular';

describe('AppComponent', () => {
	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [
				RouterTestingModule
			],
			declarations: [
				AppComponent
			],
		}).compileComponents();
	});

	it('should create the app', () => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.componentInstance;
		expect(app).toBeTruthy();
	});

	// it('should have as title [AgenDaz]', () => {
	// 	const fixture = TestBed.createComponent(AppComponent);
	// 	const app = fixture.componentInstance;
	// 	expect(app.title).toEqual('AgenDaz');
	// });

  // This one is a legacy test, it should not pass now
	// it('should render title', () => {
	// 	const fixture = TestBed.createComponent(AppComponent);
	// 	fixture.detectChanges();
	// 	const compiled = fixture.nativeElement as HTMLElement;
	// 	expect(compiled.querySelector('.content span')?.textContent).toContain('AgenDaz app is running!');
	// });

  // describe('With testing library', () => {
  //   it('should have AgenDaz header', async () => {
  //     await render(AppComponent);
  //     const header = screen.getByRole('heading', { name: 'AgenDaz'});
  //     expect(header).toBeTruthy();
  //   })
  // })
});
