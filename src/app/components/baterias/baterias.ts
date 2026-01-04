import { Component, AfterViewInit, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-baterias',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './baterias.html',
    styleUrls: ['./baterias.scss']
})
export class BateriasComponent implements AfterViewInit {
    @ViewChildren('animateItem') animateItems!: QueryList<ElementRef>;

    productsData = {
        automotive: [
            {
                name: 'LTH',
                image: 'https://www.lth.com.mx/sfsites/c/cms/delivery/media/MCPJHIT2NF35FVTGBBSDYRZV4CF4?version=1.1&channelId=0apQO0000000Ch8&oid=00DfL000007937e',
                description: 'Marca líder que encierra poder e innovación tecnológica en su interior, para brindarte seguridad y confianza gracias a su mejor desempeño.',
                features: ['Tecnología PowerFrame', 'Garantía 48 meses'],
                link: '/app-battery-lth'
            },
            {
                name: 'America',
                image: 'https://bateriasamerica.com/wp-content/themes/americaracing/graphics/AM-58R-575.png',
                description: 'Las baterías AMÉRICA RACING están diseñadas para proporcionar un nivel de potencia adecuado y larga duración.',
                features: ['AGM', 'Larga Duración'],
                link: '/app-america-batery'
            },
            {
                name: 'Hi-Tec',
                image: 'https://www.lth.com.mx/sfsites/c/cms/delivery/media/MCB56AGY3ZVNDOPCDSSY63QTFZ5M?version=1.1&channelId=0apQO0000000Ch8&oid=00DfL000007937e',
                description: 'Batería LTH que ofrecen esa potencia extra y desempeño superior que tu vehículo requiere. Brindan el abasto de energía necesario para el uso de accesorios eléctricos adicionales.',
                features: ['Tecnología PowerFrame', 'Resistencia a Vibración', 'Alto Desempeño'],
                link: '/app-hi-tec'
            },
            {
                name: 'Diener',
                image: 'https://mx.all.biz/img/mx/catalog/16700.jpeg',
                description: 'Los acumuladores DIENER están diseñados para ofrecer el máximo rendimiento, incluso en las condiciones más exigentes.',
                features: ['Resistencia a Vibración', 'Alto Desempeño'],
                link: '/app-diener-batery'
            },
            {
                name: 'LTH Protect',
                image: 'https://www.lth.com.mx/sfsites/c/cms/delivery/media/MCV7DSV4KCA5DJRIAS2Z4CACJFFI?version=1.1&channelId=0apQO0000000Ch8&oid=00DfL000007937e',
                description: 'Batería LTH con tecnología AGM. Optimizada para vehículos híbridos y eléctricos. Te protege respaldando distintos sistemas de seguridad del vehículo.',
                features: ['Tecnologia AGM', 'Maximo Desempeño'],
                link: '/app-battery-protect'
            },
            {
                name: 'LTH Evolution',
                image: 'https://www.lth.com.mx/sfsites/c/cms/delivery/media/MCBVCMPNQH3NCDPFHU452SIKW5SQ?version=1.1&channelId=0apQO0000000Ch8&oid=00DfL000007937e',
                description: 'Nueva LTH EVOLUTION Batería LTH con tecnología AGM, para vehículos con alta demanda de energía o Start-Stop',
                features: ['Tecnologia AGM', 'Maximo Desempeño'],
                link: '/app-battery-evolution'
            },
            {
                name: 'LTH Evolution Auxiliar',
                image: 'https://www.lth.com.mx/sfsites/c/cms/delivery/media/MC3PWOOOVVWVF2FC3S4XGXIUIHEU?version=1.1&channelId=0apQO0000000Ch8&oid=00DfL000007937e',
                description: 'Batería secundaria LTH con tecnología AGM. Diseñada para vehículos Start-Stop. Funciona como soporte de emergencia.',
                features: ['Tecnologia AGM', 'Maximo Desempeño'],
                link: '/app-battery-evolution-auxiliar'
            },
            {
                name: 'CALE',
                image: 'https://www.calesolar.com/img/product.png',
                description: 'Los acumuladores CALE están diseñados para ofrecer un desempeño superior, brindando potencia estable, arranques confiables y una vida útil prolongada.',
                features: ['Potencia Estable', 'Arranques Confiables', 'Vida útil prolongada'],
                link: '/app-battery-cale'
            },
            {
                name: 'LTH TAXI',
                image: 'https://www.lth.com.mx/sfsites/c/cms/delivery/media/MCN62LQHLHBFHE5DFYXL5FDOH2M4?version=1.1&channelId=0apQO0000000Ch8&oid=00DfL000007937e',
                description: 'Acumuladores LTH de ALTA DURACIÓN, diseñado especialmente para los profesionales del volante.',
                features: ['Alta Duración', 'Potencia Estable', 'Arranques Confiables'],
                link: '/app-battery-taxi'
            },
            {
                name: 'OPTIMA',
                image: 'https://bateriaslthadomicilio.com/wp-content/uploads/2020/05/Optima-1.png',
                description: 'Las baterías de litio y AGM OPTIMA® están diseñadas, probadas y demostradas para satisfacer las demandas de potencia de casi cualquier vehículo, ya sea en carretera, a campo traviesa o en el agua.',
                features: ['Potencia Estable', 'Arranques Confiables', 'Vida útil prolongada'],
                link: '/app-battery-optima'
            }
        ],

        special: [
            {
                name: 'LTH GOLF',
                image: 'https://www.lth.com.mx/sfsites/c/cms/delivery/media/MCG2X5WASHIFCR7DZ3J22BGA2ESM?version=1.1&channelId=0apQO0000000Ch8&oid=00DfL000007937e',
                description: 'Batería LTH Golf diseñados para soportar un alto número de descargas profundas y recargas sin afectar su desempeño, proporcionando ciclos de vida superiores.',
                features: ['Larga Vida'],
                link: '/app-battery-golf'
            },
            {
                name: 'LTH Podadora',
                image: 'https://www.lth.com.mx/sfsites/c/cms/delivery/media/MCI5BO6QRW4JA2PLSI4MHGETVBEQ?version=1.1&channelId=0apQO0000000Ch8&oid=00DfL000007937e',
                description: 'Ideal para proveer de energía a podadoras y equipos de jardín.',
                features: ['Larga Vida'],
                link: '/app-battery-podadora'
            },
            {
                name: 'LTH® MARINA',
                image: 'https://www.lth.com.mx/sfsites/c/cms/delivery/media/MCXK6DDPVHE5HCVBEXBWUGUGFEQI?version=1.1&channelId=0apQO0000000Ch8&oid=00DfL000007937e',
                description: 'Batería diseñada especialmente para aplicaciones marinas. El poder de baterías LTH también sobre el agua.',
                features: ['Larga Vida'],
                link: '/app-battery-marina'
            }
        ],

        heavyDuty: [
            {
                name: 'LTH Heavy Duty',
                image: 'https://www.lth.com.mx/sfsites/c/cms/delivery/media/MCTIJAFPQEMNDFPJUXL3MYE75EB4?version=1.1&channelId=0apQO0000000Ch8&oid=00DfL000007937e',
                description: 'El mejor acumulador para el trabajo pesado en condiciones extremas, gracias a su diseño robusto',
                features: ['Ciclo Profundo', 'Uso Rudo'],
                link: '/app-battery-heavy-duty'
            },
            {
                name: 'LTH® CICLADO PROFUNDO',
                image: 'https://www.lth.com.mx/sfsites/c/cms/delivery/media/MCY7OTFOJTGVGY3CQZKQVJWMW72I?version=1.1&channelId=0apQO0000000Ch8&oid=00DfL000007937e',
                description: 'El mejor acumulador para el trabajo pesado en condiciones extremas, gracias a su diseño robusto',
                features: ['Ciclo Profundo', 'Uso Rudo'],
                link: '/app-battery-ciclado-profundo'
            }
        ]
    };

    ngAfterViewInit() {
        try {
            const observerOptions = {
                root: null,
                rootMargin: "0px 0px -50px 0px",
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            this.observeItems(observer);

            this.animateItems.changes.subscribe(() => {
                this.observeItems(observer);
            });
        } catch (error) {
            console.error('Error initializing IntersectionObserver:', error);
        }
    }

    private observeItems(observer: IntersectionObserver) {
        this.animateItems.forEach((item) => {
            observer.observe(item.nativeElement);
        });
    }
}
