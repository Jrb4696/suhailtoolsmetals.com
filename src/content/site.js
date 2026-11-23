/*
  Every word, number, photograph and link on the site lives in this file.
  Edit here; the section components in src/sections only lay it out.

  TODO(client) marks something the client still has to supply or confirm.
  Search the project for "TODO(client)" to see the full list (also in README.md).
*/

export const company = {
  name: 'Suhail Tools and Metals',
  short: 'STM',
  founded: 1997,
  director: 'Mohamed Suhail H',
  // Printed as given in the company deck. TODO(client): confirm this is the number to publish.
  phone: '8667338647',
  phoneHref: 'tel:+918667338647',
  // The quote form opens the visitor's mail app addressed here until a form service is connected.
  email: 'stmmadras@gmail.com',
  // TODO(client): a form service address (Formspree, Getform, Basin, your own API).
  // When set, the form posts here and shows a real "sent" line instead of opening the mail app.
  formEndpoint: '',
  instagram: 'https://www.instagram.com/suhailtoolsmetals/',
  // TODO(client): the live domain, e.g. https://suhailtools.in. Used for the canonical link and share tags.
  domain: '',
  // Street and district only on the page (no house numbers or postcodes).
  // TODO(client): say if you want the full addresses (No. 1 ... 600032) printed instead.
  office: { label: 'Office', street: 'MKN Road', district: 'Guindy', city: 'Chennai' },
  yard: { label: 'Godown', street: 'Kumaran Nagar', district: 'Thirumudivakkam', city: 'Chennai' },
};

export const mainAction = { label: 'Request a quote', href: '#quote' };

export const nav = [
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Safety', href: '#safety' },
  { label: 'Equipment', href: '#equipment' },
];

export const hero = {
  title: 'Demolition and scrap disposal in Chennai',
  lead: 'We take down buildings, dismantle plant and machinery, buy the scrap and clear the site. Clients include ports, airports, sugar mills and factories across India.',
  secondary: { label: 'See the projects', href: '#projects' },
  // the big framed photograph: a landscape cut of the hero original (scripts/prepare-photos.py, CUTS)
  photo: {
    src: '/photos/excavator-brick-building-wide.webp',
    alt: 'A Tata Hitachi excavator pulling down a brick building, rubble heaped in front of it',
    pos: '50% 58%',
  },
  // the small photograph beside the lead
  inset: {
    src: '/photos/crane-lifting-structure.webp',
    alt: 'A crane lifting a steel structure off a plant on chains',
  },
  // the angled card in the frame's lower right corner, linking to the clips
  card: {
    label: 'Watch the crew at work',
    href: '#video',
    photo: { src: '/photos/excavator-pulling-building.webp', alt: '' },
  },
};

export const services = {
  title: 'Services for buildings, plants and scrap yards',
  lead: 'One crew handles each job, from the valuation to the last load of debris.',
  items: [
    {
      key: 'demolition',
      name: 'Building demolition',
      line: 'Houses, offices, high-rise and tiled-roof buildings, sheds and factories, by machine or by hand.',
      photo: { src: '/photos/demolition-orange-building.webp', alt: 'An excavator taking down an orange two-storey building while a worker watches from the street' },
    },
    {
      key: 'plant',
      name: 'Plant and machinery disposal',
      line: 'Boilers, power plants, conveyors, EOT and gantry cranes, chillers, cooling towers, panels, cables and office IT.',
      photo: { src: '/photos/machine-lift-chain-block.webp', alt: 'Two workers lifting a heavy machine off its base with a chain block' },
    },
    {
      key: 'scrap',
      name: 'Scrap buying and yard clearance',
      line: 'Ferrous and non-ferrous metal, heavy melting scrap, structural steel, plastics and rejected pipe and sheet.',
      photo: { src: '/photos/crane-scrap-yard.webp', alt: 'A crane lifting a scrapped machine across a yard lined with trees' },
    },
  ],
};

// From the company deck, "Current ongoing projects".
export const currentProjects = {
  title: '7 projects on site now',
  lead: 'For public bodies and manufacturers in Tamil Nadu and Puducherry.',
  photo: { src: '/photos/excavator-tearing-wall.webp', alt: 'An excavator arm tearing the wall off a building above a heap of broken brick' },
  items: [
    { job: 'Demolition of tile-roofed buildings', client: 'Anna University', place: 'Chennai' },
    { job: 'Machinery scrap disposal', client: 'Hindustan National Glass and Industries', place: 'Puducherry' },
    { job: 'Dismantling and disposal of a shed', client: 'Global TVS', place: 'Tiruchirappalli' },
    { job: 'Scrap yard disposal', client: 'Corporation of Chennai', place: 'Chennai' },
    { job: 'Dismantling a 40-ton boiler', client: 'Dharmapuri Co-operative Sugar Mills', place: 'Dharmapuri' },
    { job: 'Dip unit, 60 metres an hour', client: 'MRF Tyres', place: 'Arakkonam' },
    { job: 'DVOR counterpoise pole at the runway', client: 'Airport Authority of India', place: 'Chennai' },
  ],
};

// From the company deck, "Some of our milestone projects".
// TODO(client): photographs of these exact jobs, if you have them, so each can get its own picture.
export const milestones = {
  title: 'Milestones, 2007 to 2025',
  items: [
    { year: 2025, job: 'Officer’s quarters demolition', client: 'Airport Authority of India' },
    { year: 2025, job: 'Runway panels, cables and light masts', client: 'Airport Authority of India' },
    { year: 2024, job: 'Mill roller and gear unit', client: 'Vellore Co-operative Sugar Mills' },
    { year: 2019, job: 'Demolition of the old Goa Museum', client: 'GSIDC, Panaji' },
    { year: 2018, job: 'Machinery and equipment disposal', client: 'Government of India Press, Haryana' },
    { year: 2014, job: 'Shed, panels and cables', client: 'BEL, Bengaluru' },
    { year: 2011, job: 'Container freight station demolition', client: 'Chennai Port Trust' },
    { year: 2011, job: 'Wharf crane dismantling', client: 'Tuticorin Port Trust' },
    { year: 2010, job: 'Electrical units disposal', client: 'BPCL, Kochi' },
    { year: 2007, job: 'Boeing aircraft dismantling', client: 'Blue Dart' },
  ],
  photos: [
    { src: '/photos/excavator-rubble.webp', alt: 'An excavator working on a demolition site under a blue sky' },
    { src: '/photos/roof-truss-dismantling.webp', alt: 'Workers taking apart a steel roof truss' },
    { src: '/photos/steel-frame-dismantling.webp', alt: 'A steel frame of a plant, partly dismantled' },
  ],
};

export const process = {
  title: 'Demolish smart. Scrap right.',
  titleMuted: 'Every job runs in three steps.',
  steps: [
    {
      title: 'Value the scrap on site',
      line: 'We inspect the building or plant and price the scrap before any work starts.',
      photo: { src: '/photos/machinery-loading-truck.webp', alt: 'The crew beside a lorry loaded with dismantled machinery' },
    },
    {
      title: 'Dismantle plant for more metal',
      line: 'We know where to cut and how to dismantle, so more metal comes back whole.',
      photo: { src: '/photos/gas-cutting.webp', alt: 'A worker gas-cutting a steel part, sparks flying' },
    },
    {
      title: 'Clear the debris and scrap',
      line: 'Everything leaves on our lorries and the ground is handed back clear.',
      photo: { src: '/photos/cleared-site.webp', alt: 'A cleared plot with fresh grass where a building stood' },
    },
  ],
};

// One statement, read word by word (the word-highlight moment). <strong> marks the stressed words.
export const safety = {
  label: 'Safety, health and environment',
  before: 'Before any cut, we identify the hazards and ',
  strong: 'assess the risk',
  after: '. Every worker wears PPE, gas cutting is controlled, a supervisor stays on site, and we follow your safety rules as well as the law.',
};

// The client's own phone videos: a list beside one player; the row under the pointer, focus or tap
// loads its clip (the kit's peek list). Each plays only on a click, muted until the visitor turns sound on.
export const videos = {
  title: 'Demolition and dismantling on video',
  lead: 'Four clips filmed on our sites. Choose one, then press play.',
  items: [
    { key: 'clip-demolition', name: 'Building demolition', line: 'An excavator brings down a two-storey building.', src: '/video/excavator-demolition.mp4', poster: '/video/excavator-demolition.jpg' },
    { key: 'clip-crane', name: 'Crane lift at a plant', line: 'A mobile crane lifts a steel structure beside a chimney.', src: '/video/crane-at-plant.mp4', poster: '/video/crane-at-plant.jpg' },
    { key: 'clip-cutting', name: 'Gas cutting at height', line: 'Cutting overhead steel from a ladder inside a factory.', src: '/video/gas-cutting-at-height.mp4', poster: '/video/gas-cutting-at-height.jpg' },
    { key: 'clip-panels', name: 'Panel room dismantling', line: 'Stripping an electrical panel room, cable by cable.', src: '/video/panel-dismantling.mp4', poster: '/video/panel-dismantling.jpg' },
  ],
};

export const equipment = {
  title: 'Equipment we bring to every job',
  lead: 'Our own demolition crew brings the kit to break, cut, lift and move heavy plant.',
  items: [
    'Excavators',
    'Hand and compressor breakers',
    'Cranes and forklifts',
    'Chain blocks',
    'Gas cutting sets and hand tools',
    'Scrap handling machinery',
    'Trolleys, skates and Raise-n-Roll movers',
  ],
  photos: [
    { src: '/photos/breaker-on-roof.webp', alt: 'A worker breaking a concrete roof with a hand breaker, tower blocks behind' },
    { src: '/photos/excavator-on-site.webp', alt: 'A yellow excavator on a heap of broken brick at the edge of a wood' },
  ],
};

export const quote = {
  title: 'Request a quote for demolition or scrap',
  lead: 'Tell us the site, what needs to go and when. Photographs or tender documents help us value the scrap.',
  whoLabel: 'Who calls us',
  who: [
    'Manufacturers and liquidators',
    'Builders, architects and civil engineers',
    'HR, production and stores managers',
    'Bank recovery departments',
  ],
  sent: 'Your quote request is in. We call or email you back.',
  reply: 'We call or email you back with a valuation.',
};

export const close = {
  title: 'Bring us the site, we clear it',
  line: 'Office in Guindy and a godown in Thirumudivakkam, Chennai.',
  photo: { src: '/photos/site-debris.webp', alt: 'Broken brick and earth on a site behind green safety netting', pos: '50% 55%' },
};

export const footer = {
  lede: 'Demolition, dismantling and scrap disposal.',
  columns: [
    { title: 'Company', links: [
      { label: 'Services', href: '#services' },
      { label: 'Projects', href: '#projects' },
      { label: 'Milestones', href: '#milestones' },
      { label: 'How we work', href: '#process' },
    ] },
    { title: 'On site', links: [
      { label: 'Safety', href: '#safety' },
      { label: 'Video', href: '#video' },
      { label: 'Equipment', href: '#equipment' },
    ] },
  ],
};

// Old page addresses from the previous site, sent to the matching section.
export const legacyRoutes = {
  '/about-us': '#process',
  '/services': '#services',
  '/infrastructure': '#equipment',
  '/sustainability': '#safety',
  '/media': '#video',
  '/all-projects': '#projects',
  '/contact': '#quote',
};

export const mapSearch = (place) =>
  `https://www.openstreetmap.org/search?query=${encodeURIComponent([place.street, place.district, place.city].join(' '))}`;
