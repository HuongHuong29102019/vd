import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateTimeVN'
})
export class DateTimeVNPipe implements PipeTransform {

  transform(date:any): string {
    let tg =  new Date(date);
    let wk =  tg.getDay();
    let thu = '';
    switch(wk){
      case 0: thu = 'Chủ Nhật';break;
      case 1: thu = 'Thứ hai';break;
      case 2: thu = 'Thứ ba';break;
      case 3: thu = 'Thứ tư';break;
      case 4: thu = 'Thứ năm';break;
      case 5: thu = 'Thứ sáu';break;
      case 6: thu = 'Thứ bảy';break;
    }
    return thu + ', ngày ' + tg.getDate().toString() + '/'+(tg.getMonth()+1).toString() + '/'+tg.getFullYear();
  }

}
