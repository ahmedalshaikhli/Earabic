import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountService } from 'src/app/account/account.service';
import { BasketService } from 'src/app/basket/basket.service';
import { Basket, BasketItem } from 'src/app/shared/models/basket';
import { Brand } from 'src/app/shared/models/brand';
import { ShopParams } from 'src/app/shared/models/shopParams';
import { User } from 'src/app/shared/models/user';
import { ShopService } from 'src/app/shop/shop.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  brands: Brand[] = [];
  shopParams: ShopParams;
  basket$: Observable<Basket>;
  currentUser$: Observable<User>;
  isAdmin$: Observable<boolean>;
  isOffcanvasOpen: boolean = false;
  public userProfilePhoto: string = '';
  constructor(
    public basketService: BasketService,
    public accountService: AccountService,
    private shopService: ShopService
  ) {
    this.shopParams = shopService.getShopParams();
  }

  ngOnInit() {
    this.getBrands();
    this.basket$ = this.basketService.basketSource$;
    this.currentUser$ = this.accountService.currentUser$;
    this.isAdmin$ = this.accountService.isAdmin$;
    this.getUserProfilePhoto();
  }

  getBrands() {
    this.shopService.getBrands().subscribe({
      next: response => this.brands = [{id: 0, name: 'الجميع'}, ...response],
      error: error => console.log(error)
    })
  }

  getCount(items: BasketItem[]) {
    return items.reduce((sum, item) => sum + item.quantity, 0);
  }

  onBrandSelected(brandId: number) {
    this.shopService.setBrandId(brandId);
  }

  toggleOffcanvas() {
    this.isOffcanvasOpen = !this.isOffcanvasOpen;
  }
  async getUserProfilePhoto() {
    try {
      const userSettingObservable = await this.accountService.getCurrentUserForSetting();
      userSettingObservable.subscribe(userSetting => {
        this.userProfilePhoto = userSetting.userProfilePhoto;
        console.log(this.userProfilePhoto);
      });
    } catch (error) {
      console.error(error);
    }
  }

  
}

