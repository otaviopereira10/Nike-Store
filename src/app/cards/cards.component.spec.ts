import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardsComponent } from './cards.component';
import { ProductsService } from '../model/services/products.service';
import { By } from '@angular/platform-browser';

describe('CardsComponent', () => {
  let component: CardsComponent;
  let fixture: ComponentFixture<CardsComponent>;

  // Mock atualizado do serviço
  const productsServiceMock = {
    getProducts: () => [
      { id: 1, name: 'Nike Air Max 90', price: 50.0, description: 'The insole are confortable so you can', img: './NikeAir90.png' },
      { id: 2, name: 'Nike Air Force 270', price: 50.0, description: 'The insole are confortable so you can', img: './NikeAir270.png' },
      { id: 3, name: 'Nike Air Force', price: 40.0, description: 'The insole are confortable so you can', img: './AirForce.png' },
    ],
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsComponent],
      providers: [{ provide: ProductsService, useValue: productsServiceMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(CardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display products fetched from ProductsService', () => {
    const productElements = fixture.debugElement.queryAll(By.css('.name'));
    expect(productElements.length).toBe(3); // Verifica se os 3 produtos foram renderizados
    const productNames = productElements.map(el => el.nativeElement.textContent.trim());
    expect(productNames).toEqual(['Nike Air Max 90', 'Nike Air Force 270', 'Nike Air Force']);
  });

  it('should have a button with the correct initial background color', () => {
    const buttonElement = fixture.debugElement.query(By.css('button')).nativeElement;
    const style = getComputedStyle(buttonElement);
    expect(style.backgroundColor).toBe('rgb(255, 0, 0)'); // Verifica se a cor de fundo é vermelha
  });

  it('should render the H2 with text "The insole are confortable so you can wear them everyday"', () => {
    const h2Element = fixture.debugElement.query(By.css('h2')).nativeElement;
    expect(h2Element.textContent.trim()).toBe('The insole are confortable so you can wear them everyday');
  });

  it('should render a P tag with the correct text for the product description', () => {
    const descriptionElements = fixture.debugElement.queryAll(By.css('.description'));
    const descriptions = descriptionElements.map(el => el.nativeElement.textContent.trim());
    expect(descriptions).toEqual([
      'The insole are confortable so you can',
      'The insole are confortable so you can',
      'The insole are confortable so you can',
    ]);
  });
});
