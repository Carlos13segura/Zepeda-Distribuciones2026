import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lth-domicilio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lth-domicilio.html',
  styleUrl: './lth-domicilio.scss',
})
export class LthDomicilioComponent {

  heroBenefits = [
    { icon: 'bi-stopwatch', text: 'Recíbela en<br>menos de 1 hora**' },
    { icon: 'bi-credit-card', text: 'Paga con efectivo<br>o tarjeta en la entrega' },
    { icon: 'bi-cash-coin', text: 'Descuento al entregar<br>tu batería usada' }
  ];

  mainBenefits = [
    {
      title: 'DIAGNÓSTICO',
      text: 'Te ofrecemos el diagnóstico gratuito de tu batería siempre que lo necesites con equipo especializado y la asesoría de uno de nuestros técnicos especializados.',
      icon: 'bi-activity'
    },
    {
      title: 'RECICLAJE',
      text: 'Obtén un descuento en el precio de tu nueva batería al dejarnos tu batería usada y además nosotros nos aseguramos de enviarla a una de nuestras recicladoras para cuidar de nuestro medio ambiente.',
      icon: 'bi-recycle'
    },
    {
      title: 'INSTALACIÓN',
      text: 'Al adquirir tu batería en el Centro de Servicio LTH la instalación está cubierta con la confianza de ser realizada por uno de nuestros técnicos especializados.',
      icon: 'bi-tools'
    },
    {
      title: 'PÓLIZA VIRTUAL DE GARANTÍA',
      text: 'Cuando adquieres tu batería en el Centro de Servicio LTH, te ofrecemos un resguardo electrónico de tu Póliza de garantía la cual es válida en todo México y te protege en caso de extraviar la póliza física.',
      icon: 'bi-shield-check'
    },
    {
      title: 'PRODUCTOS',
      text: 'Encontrarás una gama de productos innovadores respaldados por la calidad de la marca LTH que tiene más de 90 años como líder en el mercado. Desde reconocidas baterías, hasta otro tipo de accesorios para tu auto y para todo tipo de necesidades.',
      icon: 'bi-grid-3x3-gap-fill'
    },
    {
      title: 'COBERTURA',
      text: 'Estamos cerca de ti en más de 570 Centros de Servicio LTH en diferentes partes de México.',
      icon: 'bi-geo-alt-fill'
    }
  ];

  deliveryInfo = [
    {
      title: 'Servicio oficial de LTH',
      text: 'Somos el servicio a domicilio oficial de LTH. Te brindamos experiencia, confianza y seguridad, además de la calidad en nuestros productos, la mejor atención y servicio que caracterizan a nuestra marca.',
      icon: 'bi-award'
    },
    {
      title: 'Costo de envío',
      text: 'Recuerda que no se cobra envío en la compra de una batería nueva. En caso de NO adquirir la batería, se te aplicará un cargo por el servicio, de $250 pesos.',
      icon: 'bi-currency-dollar'
    },
    {
      title: 'Forma de pago',
      text: 'Efectivo, tarjeta de crédito y débito. El pago lo harás al momento de recibir el servicio, directamente al técnico que te visitará.',
      icon: 'bi-wallet2'
    },
    {
      title: 'Horario de atención',
      text: 'En nuestro centro de contacto te atendemos de 7:00 a.m. a 10:00 p.m. los 365 días del año. *Los horarios en días festivos pueden variar',
      icon: 'bi-clock'
    },
    {
      title: 'Cobertura',
      text: 'Tenemos disponible el servicio de LTH A DOMICILIO en diferentes ciudades de México. Puedes solicitar tu servicio al 800 8358 400.',
      icon: 'bi-broadcast'
    },
    {
      title: 'Comprometidos con el medio ambiente',
      text: 'Al entregarnos tu batería usada, obtienes un descuento en el precio de la nueva batería que estas adquiriendo con nosotros. LTH creó el programa de reciclaje responsable...',
      icon: 'bi-tree-fill'
    }
  ];

  showVehicleInfo() {
    // Placeholder logic for the vehicle info modal link
    console.log('Show vehicle info modal');
  }

  scrollToForm() {
    const formElement = document.getElementById('form-section');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
