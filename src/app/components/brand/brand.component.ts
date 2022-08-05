import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BrandDto } from 'src/app/models/brandDto';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss']
})
export class BrandComponent implements OnInit {
  brands:Array<BrandDto> = [];
  selectedBrand!:BrandDto;
  formulario!: FormGroup;

  constructor(private brandService: BrandService,
    private modalService: NgbModal,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.brandService.getBrands().subscribe(
      data => this.brands = data
    );
  }

  editBrand(code:string, content:any) {
    this.brandService.getBrandById(code).subscribe(
      response => {
        this.selectedBrand = response;
        console.log(this.selectedBrand);
        this.buildForm();
        this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'})
      }
    );
  }

  buildForm() {
    this.formulario= this.formBuilder.group({
      code: [{value: this.selectedBrand.id, disabled: true}, [Validators.required, Validators.maxLength(4)]],
      description: [this.selectedBrand.description, [Validators.required, Validators.pattern(/^[a-zA-Z0-0-_\s.áéíóúÁÉÍÓÚñÑ]+$/)]]
    });
  }

  updateBrand(content:any) {
    if(this.formulario.invalid) {
      return;
    }

    console.log(this.formulario.value);
    console.log(this.formulario.getRawValue());

    this.brandService.updateBrand(this.formulario.getRawValue()).subscribe(
      response => console.log(response)
    );
  }

}
