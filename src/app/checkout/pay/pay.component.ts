import { Component } from "@angular/core";
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { PrimeNGConfig } from "primeng/api";

@Component({
  selector: "app-pay",
  templateUrl: "./pay.component.html",
  styleUrl: "./pay.component.scss",
})
export class PayComponent {
  checkoutForm!: FormGroup;
  basketProducts: any[] = [];

  constructor(private fb: FormBuilder, private primengConfig: PrimeNGConfig) {}

  ngOnInit(): void {
    this.primengConfig.ripple = true;

    // Basket from localStorage
    this.basketProducts = JSON.parse(localStorage.getItem("basket") || "[]");

    // Initialize the form
    this.checkoutForm = this.fb.group({
      paymentCard: this.fb.group({
        cardHolderName: ["", Validators.required],
        cardNumber: [
          "",
          [
            Validators.required,
            Validators.minLength(16),
            Validators.maxLength(16),
          ],
        ],
        expireMonth: ["", Validators.required],
        expireYear: ["", Validators.required],
        cvc: [
          "",
          [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(3),
          ],
        ],
        registerCard: [0],
      }),
      buyer: this.fb.group({
        id: [0, Validators.required],
        name: ["", Validators.required],
        surname: ["", Validators.required],
        gsmNumber: ["", Validators.required],
        email: ["", [Validators.required, Validators.email]],
        identityNumber: ["", Validators.required],
        lastLoginDate: [new Date().toISOString()],
        registrationDate: [new Date().toISOString()],
        registrationAddress: ["", Validators.required],
        ip: ["192.168.1.1"],
        city: ["", Validators.required],
        country: ["", Validators.required],
        zipCode: ["", Validators.required],
      }),
      shippingAddress: this.fb.group({
        description: ["", Validators.required],
        zipCode: ["", Validators.required],
        contactName: ["", Validators.required],
        city: ["", Validators.required],
        country: ["", Validators.required],
      }),
      billingAddress: this.fb.group({
        description: ["", Validators.required],
        zipCode: ["", Validators.required],
        contactName: ["", Validators.required],
        city: ["", Validators.required],
        country: ["", Validators.required],
      }),
      basketItems: this.fb.array([]), // Initialize the basketItems FormArray
    });
  }

  onSubmit() {
    this.loadBasketItems();
    console.log(this.checkoutForm.get("shippingAddress.city")?.value);
    // Fill shipping and billing address based on buyer's info
    this.checkoutForm.get("buyer")?.patchValue({
      city: this.checkoutForm.get("shippingAddress.city")?.value,
      country: this.checkoutForm.get("shippingAddress.country")?.value,
      zipCode: this.checkoutForm.get("shippingAddress.zipCode")?.value,
    });

    if (this.checkoutForm.valid) {
      const formData = this.checkoutForm.value;
      console.log(formData);
      // Handle form submission, e.g., send it to the backend
    } else {
      // Handle form validation errors
    }
  }

  // Getter for basketItems FormArray
  get basketItems(): FormArray {
    return this.checkoutForm.get("basketItems") as FormArray;
  }

  // Function to create a FormGroup for a basket item
  createBasketItem(item: any): FormGroup {
    return this.fb.group({
      id: [item.id, Validators.required],
      name: [item.name, Validators.required],
      category1: [item.category1, Validators.required],
      category2: [item.category2, Validators.required],
      itemType: [item.ItemType || "default", Validators.required], // Use a default value if not present
      price: [item.price, Validators.required],
    });
  }

  // Function to load basket items from localStorage and add to FormArray
  loadBasketItems() {
    const storedBasket = localStorage.getItem("basket");
    if (storedBasket) {
      this.basketProducts = JSON.parse(storedBasket);

      // Map each basket product to a FormGroup and add to the FormArray
      this.basketProducts.forEach((product) => {
        const basketProduct = {
          category1: product.Category1,
          category2: product.Category2,
          name: product.Name,
          price: product.Price,
          id: product.Id,
        };
        debugger;
        for (let index = 0; index < product.Count; index++) {
          this.basketItems.push(this.createBasketItem(basketProduct));
        }
      });
    }
  }
}
