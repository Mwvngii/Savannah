import { create } from 'zustand';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
  featured: boolean;
}

interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  price: number;
  gauge: number;
  finish: string;
  colors: string[];
  description: string;
  features: string[];
}

interface Contact {
  id: string;
  name: string;
  email: string;
  phone: string;
  location: string;
  product: string;
  quantity: string;
  message: string;
  date: string;
  status: 'new' | 'contacted' | 'quoted' | 'closed';
}

interface StoreState {
  // Blog
  blogPosts: BlogPost[];
  featuredPosts: BlogPost[];
  
  // Products
  products: Product[];
  
  // Contacts
  contacts: Contact[];
  
  // Search
  searchQuery: string;
  searchResults: (BlogPost | Product)[];
  
  // UI
  isLoading: boolean;
  
  // Actions
  setBlogPosts: (posts: BlogPost[]) => void;
  addBlogPost: (post: BlogPost) => void;
  setProducts: (products: Product[]) => void;
  addContact: (contact: Omit<Contact, 'id' | 'date' | 'status'>) => void;
  updateContactStatus: (id: string, status: Contact['status']) => void;
  setSearchQuery: (query: string) => void;
  performSearch: (query: string) => void;
  setLoading: (loading: boolean) => void;
}

export const useStore = create<StoreState>((set, get) => ({
  // Initial state
  blogPosts: [
    {
      id: '1',
      title: 'Complete Guide to Metal Roofing in Kenya',
      slug: 'complete-guide-metal-roofing-kenya',
      excerpt: 'Everything you need to know about choosing the right metal roofing for your Kenyan home or business.',
      content: `# Complete Guide to Metal Roofing in Kenya

Metal roofing has become increasingly popular in Kenya due to its durability, affordability, and weather resistance. In this comprehensive guide, we'll explore everything you need to know about metal roofing options available in Kenya.

## Why Choose Metal Roofing?

Metal roofing offers several advantages over traditional roofing materials:

### Durability
- Lifespan of 25-50 years
- Resistant to harsh weather conditions
- Fire resistant
- Pest resistant

### Cost-Effective
- Lower long-term maintenance costs
- Energy efficient
- Recyclable material
- Good resale value

### Weather Resistance
- Excellent performance in heavy rains
- Wind resistant up to 140 mph
- UV resistant coatings available
- Thermal expansion accommodation

## Types of Metal Roofing Available

### 1. Roman Tiles
Roman tiles offer a classic, elegant appearance that mimics traditional clay tiles while providing the benefits of metal construction.

**Features:**
- Classic curved design
- Available in multiple colors
- Excellent water drainage
- Suitable for residential and commercial use

**Pricing:**
- 28 Gauge Matte: KSh 700 per sheet
- 30 Gauge Matte: KSh 590 per sheet
- 28 Gauge Glossy: KSh 650 per sheet
- 30 Gauge Glossy: KSh 520 per sheet

### 2. Box Profile
Box profile sheets are ideal for modern architectural designs and industrial applications.

**Features:**
- Contemporary appearance
- High strength-to-weight ratio
- Easy installation
- Excellent for large spans

**Pricing:**
- 28 Gauge Matte: KSh 670 per sheet
- 30 Gauge Matte: KSh 540 per sheet
- 28 Gauge Glossy: KSh 600 per sheet
- 30 Gauge Glossy: KSh 470 per sheet

### 3. Corrugated Sheets
The traditional choice for many Kenyan homes and businesses, corrugated sheets offer proven performance.

**Features:**
- Time-tested design
- Cost-effective solution
- Easy to install and maintain
- Suitable for various applications

**Pricing:**
- 28 Gauge Matte: KSh 670 per sheet
- 30 Gauge Matte: KSh 540 per sheet
- 28 Gauge Glossy: KSh 600 per sheet
- 30 Gauge Glossy: KSh 470 per sheet

## Installation Considerations

### Climate Factors
Kenya's diverse climate zones require different considerations:

**Coastal Areas:**
- High humidity and salt air
- Recommend galvanized steel with protective coatings
- Regular maintenance required

**Highland Areas:**
- Temperature variations
- Hail resistance important
- Proper insulation recommended

**Arid Areas:**
- Extreme heat and UV exposure
- Light-colored finishes recommended
- Thermal expansion considerations

### Professional Installation
While metal roofing can be DIY-friendly, professional installation ensures:
- Proper fastening techniques
- Adequate ventilation
- Warranty compliance
- Safety compliance

## Maintenance Tips

### Regular Inspections
- Check for loose fasteners
- Inspect for scratches or damage
- Clear debris from gutters
- Look for signs of corrosion

### Cleaning
- Use mild detergent and water
- Avoid abrasive cleaners
- Rinse thoroughly
- Clean gutters regularly

### Repairs
- Address issues promptly
- Use matching materials
- Follow manufacturer guidelines
- Consider professional help for major repairs

## Cost Considerations

### Initial Investment
Metal roofing typically costs more upfront than asphalt shingles but offers better long-term value.

### Long-term Savings
- Lower maintenance costs
- Energy savings
- Insurance discounts possible
- Higher resale value

### Financing Options
Many suppliers offer:
- Payment plans
- Bulk discounts
- Contractor financing
- Seasonal promotions

## Choosing the Right Supplier

### Quality Assurance
Look for suppliers who offer:
- Warranty coverage
- Quality certifications
- Installation support
- After-sales service

### Local Presence
Choose suppliers with:
- Local inventory
- Fast delivery
- Technical support
- Established reputation

## Environmental Benefits

Metal roofing is environmentally friendly:
- 100% recyclable
- Energy efficient
- Long lifespan reduces waste
- Often made from recycled materials

## Conclusion

Metal roofing represents an excellent investment for Kenyan property owners. With proper selection, installation, and maintenance, metal roofing can provide decades of reliable protection while enhancing property value.

For expert advice and competitive pricing on metal roofing solutions, contact Savannah Mabati today. Our team of professionals can help you choose the perfect roofing solution for your specific needs and budget.`,
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'David Kamau',
      date: '2024-01-15',
      category: 'Roofing Guide',
      tags: ['metal roofing', 'kenya', 'construction', 'guide'],
      featured: true
    },
    {
      id: '2',
      title: 'Roman Tiles vs Traditional Clay: Which is Better?',
      slug: 'roman-tiles-vs-clay-comparison',
      excerpt: 'A detailed comparison between metal Roman tiles and traditional clay tiles for Kenyan homes.',
      content: `# Roman Tiles vs Traditional Clay: Which is Better?

When choosing roofing materials for your Kenyan home, the decision between metal Roman tiles and traditional clay tiles is crucial. Both options have their merits, but understanding their differences will help you make an informed choice.

## Metal Roman Tiles

### Advantages
- **Lightweight**: Significantly lighter than clay tiles
- **Durability**: 25+ year lifespan with proper maintenance
- **Weather Resistant**: Excellent performance in heavy rains and strong winds
- **Cost-Effective**: Lower installation and maintenance costs
- **Color Options**: Available in multiple colors and finishes
- **Fire Resistant**: Non-combustible material

### Disadvantages
- **Thermal Expansion**: Requires proper installation techniques
- **Noise**: Can be noisier during heavy rain (mitigated with proper insulation)
- **Appearance**: May not have the exact look of traditional clay

## Traditional Clay Tiles

### Advantages
- **Authentic Appearance**: Classic, traditional look
- **Thermal Mass**: Natural insulation properties
- **Longevity**: Can last 50+ years with proper care
- **Natural Material**: Environmentally friendly

### Disadvantages
- **Weight**: Requires stronger roof structure
- **Cost**: Higher material and installation costs
- **Fragility**: More prone to cracking and breaking
- **Maintenance**: Requires more frequent repairs
- **Limited Colors**: Fewer color options available

## Cost Comparison

### Initial Investment
- **Metal Roman Tiles**: KSh 520-700 per sheet
- **Clay Tiles**: KSh 800-1,200 per square meter

### Long-term Costs
- **Metal**: Lower maintenance, easier repairs
- **Clay**: Higher maintenance, more expensive repairs

## Climate Considerations

### Coastal Areas
- **Metal**: Better corrosion resistance with proper coating
- **Clay**: Natural resistance but heavy for coastal structures

### Highland Areas
- **Metal**: Better thermal expansion handling
- **Clay**: Excellent thermal mass for temperature regulation

## Installation Factors

### Structural Requirements
- **Metal**: Lighter load on roof structure
- **Clay**: Requires reinforced roof structure

### Installation Time
- **Metal**: Faster installation
- **Clay**: More time-consuming installation

## Conclusion

For most Kenyan homes, metal Roman tiles offer the best balance of performance, cost, and aesthetics. They provide the classic look of clay tiles while offering superior durability and cost-effectiveness.`,
      image: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Sarah Wanjiku',
      date: '2024-01-10',
      category: 'Product Comparison',
      tags: ['roman tiles', 'clay tiles', 'comparison', 'roofing'],
      featured: true
    },
    {
      id: '3',
      title: 'Roofing Maintenance Tips for Kenyan Weather',
      slug: 'roofing-maintenance-kenyan-weather',
      excerpt: 'Essential maintenance tips to keep your metal roof in perfect condition throughout Kenya\'s diverse weather patterns.',
      content: `# Roofing Maintenance Tips for Kenyan Weather

Kenya's diverse climate presents unique challenges for roof maintenance. From the humid coastal regions to the dry highlands, each area requires specific care approaches to ensure your metal roofing performs optimally year-round.

## Understanding Kenya's Climate Zones

### Coastal Region
- High humidity and salt air
- Heavy seasonal rains
- Consistent temperatures

### Highland Region
- Temperature variations
- Occasional hail
- Moderate rainfall

### Arid and Semi-Arid Regions
- Extreme heat and UV exposure
- Minimal rainfall
- Dust and sand exposure

## Seasonal Maintenance Schedule

### Before Rainy Season (March-May, October-December)
1. **Inspect and Clean Gutters**
   - Remove debris and leaves
   - Check for proper drainage
   - Repair any damage

2. **Check Fasteners**
   - Tighten loose screws
   - Replace damaged fasteners
   - Ensure proper sealing

3. **Inspect Sealants**
   - Check around penetrations
   - Reseal if necessary
   - Use quality sealants

### During Dry Season (June-September, January-February)
1. **Surface Cleaning**
   - Remove dust and debris
   - Use mild detergent solution
   - Rinse thoroughly

2. **Coating Inspection**
   - Check for UV damage
   - Look for fading or chalking
   - Consider recoating if needed

3. **Ventilation Check**
   - Ensure vents are clear
   - Check for proper airflow
   - Clean or replace filters

## Regional-Specific Tips

### Coastal Areas
- **Salt Air Protection**: Regular washing to remove salt deposits
- **Corrosion Prevention**: Use marine-grade fasteners and sealants
- **Humidity Control**: Ensure adequate ventilation

### Highland Areas
- **Thermal Expansion**: Allow for movement in fastening systems
- **Hail Damage**: Inspect after storms for dents or damage
- **Temperature Cycling**: Check for stress cracks

### Arid Regions
- **UV Protection**: Consider reflective coatings
- **Dust Management**: Regular cleaning to prevent buildup
- **Heat Expansion**: Monitor fastener integrity

## Common Issues and Solutions

### Leaks
**Causes:**
- Loose fasteners
- Damaged sealants
- Improper installation

**Solutions:**
- Retighten fasteners
- Reseal penetrations
- Professional inspection

### Corrosion
**Causes:**
- Salt air exposure
- Scratched coatings
- Poor drainage

**Solutions:**
- Regular cleaning
- Touch-up coatings
- Improve drainage

### Thermal Movement
**Causes:**
- Temperature variations
- Improper fastening
- Inadequate expansion joints

**Solutions:**
- Use proper fastening techniques
- Install expansion joints
- Professional assessment

## Professional Maintenance Services

### Annual Inspections
- Comprehensive roof assessment
- Detailed reporting
- Preventive recommendations

### Cleaning Services
- Professional equipment
- Safe procedures
- Protective treatments

### Repair Services
- Expert diagnosis
- Quality materials
- Warranty coverage

## DIY Maintenance Safety

### Safety Equipment
- Non-slip shoes
- Safety harness
- Proper ladder

### Weather Conditions
- Avoid wet or windy conditions
- Work during cooler hours
- Have assistance available

### When to Call Professionals
- Steep roofs
- Electrical work
- Major repairs

## Cost-Effective Maintenance

### Preventive Approach
- Regular inspections save money
- Early problem detection
- Extended roof life

### Quality Materials
- Use manufacturer-approved products
- Invest in quality fasteners
- Choose appropriate sealants

### Professional Partnerships
- Establish relationships with contractors
- Regular service agreements
- Emergency response plans

## Conclusion

Proper maintenance is key to maximizing your metal roof's lifespan and performance in Kenya's challenging climate. By following these guidelines and working with qualified professionals, you can ensure your investment continues to protect your property for decades to come.

For professional maintenance services and quality roofing materials, contact Savannah Mabati. Our experienced team understands Kenya's unique climate challenges and can help keep your roof in optimal condition.`,
      image: 'https://images.pexels.com/photos/323776/pexels-photo-323776.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Peter Mwangi',
      date: '2024-01-05',
      category: 'Maintenance',
      tags: ['maintenance', 'weather', 'kenya', 'tips'],
      featured: false
    }
  ],
  featuredPosts: [],
  
  products: [
    {
      id: '1',
      name: 'SAVANNAH ROMANTILE',
      category: 'Roman Tiles',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: 520,
      gauge: 30,
      finish: 'Glossy',
      colors: ['Dark Blue', 'Green', 'Red', 'Black'],
      description: 'Premium Roman tile profile offering classic elegance with modern durability.',
      features: ['Classic curved design', 'Excellent water drainage', 'Multiple color options', 'UV resistant coating']
    },
    {
      id: '2',
      name: 'SAVANNAH BOX PROFILE',
      category: 'Box Profile',
      image: 'https://images.pexels.com/photos/323776/pexels-photo-323776.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: 470,
      gauge: 30,
      finish: 'Glossy',
      colors: ['Blue', 'Orange', 'Green', 'Black'],
      description: 'Modern box profile design perfect for contemporary architecture.',
      features: ['Contemporary appearance', 'High strength-to-weight ratio', 'Easy installation', 'Suitable for large spans']
    }
  ],
  
  contacts: [],
  searchQuery: '',
  searchResults: [],
  isLoading: false,
  
  // Actions
  setBlogPosts: (posts) => set({ blogPosts: posts, featuredPosts: posts.filter(p => p.featured) }),
  
  addBlogPost: (post) => set((state) => ({
    blogPosts: [post, ...state.blogPosts],
    featuredPosts: post.featured ? [post, ...state.featuredPosts] : state.featuredPosts
  })),
  
  setProducts: (products) => set({ products }),
  
  addContact: (contactData) => {
    const contact: Contact = {
      ...contactData,
      id: Date.now().toString(),
      date: new Date().toISOString(),
      status: 'new'
    };
    set((state) => ({ contacts: [contact, ...state.contacts] }));
  },
  
  updateContactStatus: (id, status) => set((state) => ({
    contacts: state.contacts.map(contact => 
      contact.id === id ? { ...contact, status } : contact
    )
  })),
  
  setSearchQuery: (query) => set({ searchQuery: query }),
  
  performSearch: (query) => {
    const { blogPosts, products } = get();
    const searchResults: (BlogPost | Product)[] = [];
    
    // Search blog posts
    blogPosts.forEach(post => {
      if (
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.content.toLowerCase().includes(query.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
      ) {
        searchResults.push(post);
      }
    });
    
    // Search products
    products.forEach(product => {
      if (
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase())
      ) {
        searchResults.push(product);
      }
    });
    
    set({ searchResults, searchQuery: query });
  },
  
  setLoading: (loading) => set({ isLoading: loading })
}));