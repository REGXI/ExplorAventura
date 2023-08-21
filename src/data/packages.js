import Leon from '../assets/images/catedral_de_leon.webp'
import Cayo_perla2 from '../assets/images/cayo_perla2.webp'
import Airportmanagua from '../assets/images/airportmanagua.webp'
import Granada_isletas_granada from '../assets/images/granada_isletas_granada.webp'
import Rivas_san_juan_del_sur from '../assets/images/rivas_san_juan_del_sur.webp'
import volcan_masaya from '../assets/images/volcan_masaya.webp'
import cerronegro from '../assets/images/cerronegro.webp'
import san_juan_delsur from '../assets/images/san_juan_delsur.webp'
import volcan_masaya2 from '../assets/images/volcan_masaya2.webp'
import isletasgranada from '../assets/images/isletasgranada.webp'
import santodomingobeach from '../assets/images/santodomingobeach.webp'
import granada_parque_central from '../assets/images/granada_parque_central.webp'
import sanjorgeport from '../assets/images/sanjorgeport.webp'
import esteli from '../assets/images/esteli.webp'
import nuevasegobia from '../assets/images/nuevasegobia.webp'

export const PACKAGE_ITEMS = [
  {
    id: 1,
    title: 'Highlight Nicaragua',
    image: Cayo_perla2,
    duration: '6 days / 5 nights',
    trajectory: [
      {
        title: 'day',
        description: 'highlight nicaragua description 1',
        site: 'Managua Airport - Granada',
        route: '45km / 1 hora según el trafico ',
        image: Airportmanagua
      },
      {
        title: 'day',
        description: 'highlight nicaragua description 2',
        site: 'Granada - City Tour - Islets - Granada',
        route: '10km / 15 minutos de recorrido + 2 horas en lancha ',
        image: Granada_isletas_granada
      },
      {
        title: 'day',
        site: 'Granada - Ometepe Island - San Juan del Sur',
        description: 'highlight nicaragua description 3',
        route: '160km / 3 horas según el trafico + 2 horas de ferry ',
        image: Rivas_san_juan_del_sur
      },
      {
        title: 'day',
        description: 'highlight nicaragua description 4',
        site: 'San Juan del Sur - Rural Day in Masaya - Masaya Volcano National Park - Leon',
        route: '235km / 4.40 horas según el trafico ',
        image: volcan_masaya
      },
      {
        title: 'day',
        description: 'highlight nicaragua description 5',
        site: 'Leon - Cerro Negro - Las Peñitas - Leon',
        route: '95km / 3 horas según el trafico + 2 horas Cerro Negro',
        image: cerronegro
      },
      {
        title: 'day',
        description: 'highlight nicaragua description 6',
        site: 'Leon - Managua / Airport',
        route: '115km / 2.20 horas según el trafico',
        image: Airportmanagua
      }
    ]
  },
  {
    id: 2,
    title: 'Un poquito de Nicaragua',
    duration: '8 dias / 7 noches',
    image: san_juan_delsur,
    trajectory: [
      {
        title: 'day',
        site: 'Managua - San Juan del Sur',
        route: '130km / 2.30 horas según el trafico',
        description: 'Un poquito de Nicaragua description 1',
        image: Rivas_san_juan_del_sur
      },
      {
        title: 'day',
        site: 'San Juan del Sur - La Flor Beach - San Juan del Sur',
        route: '25km / 0.40 minutos según el trafico ',
        description: 'Un poquito de Nicaragua description 2',
        image: Rivas_san_juan_del_sur
      },
      {
        title: 'day',
        site: 'San Juan del Sur - Playa Hermosa - San Juan del Sur',
        route: '30km / 1 hora según el trafico',
        description: 'Un poquito de Nicaragua description 3',
        image: Rivas_san_juan_del_sur
      },
      {
        title: 'day',
        site: 'San Juan del Sur - San Jorge Port - Moyogalpa Port / Ometepe - Santo Domingo Beach',
        route: '82km / 2 horas según el trafico + 1 hora en ferry',
        description: 'Un poquito de Nicaragua description 4',
        image: isletasgranada
      },
      {
        title: 'day',
        site: 'Santo Domingo Beach - Maderas Volcano - Santo Domingo Beach',
        route: '15km / 20 minutos + 3 horas Caminata suave',
        description: 'Un poquito de Nicaragua description 5',
        image: santodomingobeach
      },
      {
        title: 'day',
        site: 'Santo Domingo Beach - Merida, Istiam River - Santo Domingo Beach',
        route: '252km / 40 minutos + 2 horas de Kayaks',
        description: 'Un poquito de Nicaragua description 6',
        image: sanjorgeport
      },
      {
        title: 'day',
        site: 'Santo Domingo Beach - Moyogalpa Port - San Jorge Port - Catarina - Masaya Market - Masaya Volcano - Leon',
        route: '235km / 5 horas según el trafico + 1 hora en ferry',
        description: 'Un poquito de Nicaragua description 7',
        image: volcan_masaya2
      },
      {
        title: 'day',
        site: 'Leon City Tour - Cerro Negro - Managua',
        route: '145km / 3.45 horas según el trafico + 2 horas Cerro Negro',
        description: 'Un poquito de Nicaragua description 8',
        image: Leon
      },
      {
        title: 'day',
        site: 'Managua Hotel - Managua Airport',
        route: '15km / 30 minutos según el trafico',
        description: 'Un poquito de Nicaragua description 9',
        image: Airportmanagua
      }
    ]
  },
  {
    id: 3,
    title: 'Clasico de Nicaragua',
    duration: '4 dias / 3 noches',
    image: volcan_masaya2,
    trajectory: [
      {
        title: 'day',
        site: 'Peñas Blancas - Rural Day in Masaya - Masaya Volcano National Park - Managua',
        route: '1750km / 3.50 horas según el trafico ',
        description: 'Clasico de Nicaragua description 1',
        image: volcan_masaya2
      },
      {
        title: 'day',
        site: 'Managua - Granada City Tour - Isletas',
        route:
          '55km / 1.15 hora según el trafico + 1 hora recorrido en coche + 2 horas tour en Lancha',
        description: 'Clasico de Nicaragua description 2',
        image: isletasgranada
      },
      {
        title: 'day',
        site: 'Granada - San Jorge Port - Moyogalpa Port, Ometepe - Santo Domingo Beach',
        route: '115km / 2.40 horas según el trafico + 1 hora de ferry',
        description: 'Clasico de Nicaragua description 3',
        image: santodomingobeach
      },
      {
        title: 'day',
        site: 'Santo Domingo Beach - Moyogalpa Port - San Jorge Port - Peñas Blancas',
        route: '70km / 1.45 horas según el trafico + 1 hora de ferry',
        description: 'Clasico de Nicaragua description 4',
        image: sanjorgeport
      }
    ]
  },
  {
    id: 4,
    title: 'Buen Sabor de Nicaragua',
    duration: '4 dias / 3 noches',
    image: granada_parque_central,
    trajectory: [
      {
        title: 'day',
        site: 'Managua Hotel - Managua Airport',
        route: '15km / 30 minutos según el trafico ',
        description: 'Buen Sabor de Nicaragua description 1',
        image: Airportmanagua
      },
      {
        title: 'day',
        site: 'Managua - Esteli',
        route: '150km / 3 horas según el trafico ',
        description: 'Buen Sabor de Nicaragua description 2',
        image: esteli
      },
      {
        title: 'day',
        site: 'Esteli - Nueva Segovia / Jalapa - Esteli',
        route: '250km / 5.5 horas según el trafico ',
        description: 'Buen Sabor de Nicaragua description 3',
        image: nuevasegobia
      },
      {
        title: 'day',
        site: 'Esteli - Granada',
        route: '175km / 3.5 horas según el trafico ',
        description: 'Buen Sabor de Nicaragua description 4',
        image: granada_parque_central
      }
    ]
  }
]

export const getPackageItems = () => PACKAGE_ITEMS
