import { useState } from 'react'
import { BarChart3, FileText, Search, Activity, BookOpen, Globe } from 'lucide-react'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('Statistics')

  const navigationItems = [
    { name: 'Guide', icon: BookOpen },
    { name: 'Statistics', icon: BarChart3 },
    { name: 'DataQuery', icon: Search },
    { name: 'Vitality Index', icon: Activity },
    { name: 'Glossary', icon: FileText },
    { name: 'AHAData.com', icon: Globe }
  ]

  const renderContent = () => {
    console.log('Rendering content for activeTab:', activeTab);
    switch (activeTab) {
      case 'Guide':
        return (
          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Guide</h1>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Welcome to AHA Hospital Statistics</h2>
              <p className="text-gray-600 mb-4">
                This guide will help you navigate through the various features and data available in the AHA Hospital Statistics dashboard.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Use the Statistics section to view comprehensive hospital data</li>
                <li>DataQuery allows you to search and filter specific information</li>
                <li>Vitality Index provides health trend indicators</li>
                <li>Glossary contains definitions of medical and statistical terms</li>
                <li>AHAData.com provides additional resources and data</li>
              </ul>
            </div>
          </div>
        )
      case 'Statistics':
        return (
          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">AHA Hospital Statistics</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-100 rounded-lg p-6 shadow-md">
                <h2 className="text-xl font-semibold text-slate-800 mb-3">Historical Trends in Utilization and Personnel for Selected Years</h2>
                <p className="text-slate-600 text-sm">
                  Evaluate historical data and examine long-term trends in health care with data dating back more than sixty years
                </p>
              </div>
              <div className="bg-gray-100 rounded-lg p-6 shadow-md">
                <h2 className="text-xl font-semibold text-slate-800 mb-3">U.S. Hospitals: Utilization and Personnel</h2>
                <p className="text-slate-600 text-sm">
                  Discover utilization, personnel and finance statistics for U.S. hospitals
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-100 rounded-lg p-6 shadow-md">
                <h2 className="text-xl font-semibold text-slate-800 mb-3">Total United States</h2>
                <p className="text-slate-600 text-sm">
                  Discover utilization, personnel and finance statistics for U.S. hospitals
                </p>
              </div>
              <div className="bg-gray-100 rounded-lg p-6 shadow-md">
                <h2 className="text-xl font-semibold text-slate-800 mb-3">Best Size Categories</h2>
                <p className="text-slate-600 text-sm">
                  Discover utilization, personnel and finance statistics for U.S. hospitals
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-gray-100 rounded-lg p-6 shadow-md">
                <h2 className="text-xl font-semibold text-slate-800 mb-3">U.S Census Division</h2>
                <p className="text-slate-600 text-sm">
                  Track trends on a regional level by reviewing general overview, utilization, and community health indicator information
                </p>
              </div>
              <div className="bg-gray-100 rounded-lg p-6 shadow-md">
                <h2 className="text-xl font-semibold text-slate-800 mb-3">States</h2>
                <p className="text-slate-600 text-sm">
                  Track trends on a national level by reviewing general overview, utilization, personnel, and community health indicators
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
              <div className="bg-gray-100 rounded-lg p-6 shadow-md">
                <h2 className="text-xl font-semibold text-slate-800 mb-3">Facilities and Services in the U.S. Census Divisions and States</h2>
                <p className="text-slate-600 text-sm">
                  Examine facilities and services by both Census Division and State to better understand what service lines are emerging and how many facilities offer a particular service
                </p>
              </div>
              <div className="bg-gray-100 rounded-lg p-6 shadow-md">
                <h2 className="text-xl font-semibold text-slate-800 mb-3">Community Hospitals by Metropolitan Area: Utilization, Personnel and Finances</h2>
                <p className="text-slate-600 text-sm">
                  Analyze general overview, utilization, personnel, and finance information for U.S. community hospitals, broken down by Metropolitan Statistical Area (MSA)
                </p>
              </div>
            </div>
          </div>
        )
      case 'DataQuery':
        return (
          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">DataQuery</h1>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Search Hospital Data</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Search Query</label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter search terms..."
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>All Categories</option>
                      <option>Utilization</option>
                      <option>Personnel</option>
                      <option>Finances</option>
                      <option>Facilities</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Year Range</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>All Years</option>
                      <option>2020-2024</option>
                      <option>2015-2019</option>
                      <option>2010-2014</option>
                    </select>
                  </div>
                </div>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
                  Search
                </button>
              </div>
            </div>
          </div>
        )
      case 'Vitality Index':
        return (
          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Vitality Index</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-4">Health Trend Indicators</h2>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded">
                    <span className="font-medium">Patient Satisfaction</span>
                    <span className="text-green-600 font-bold">92%</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded">
                    <span className="font-medium">Bed Occupancy Rate</span>
                    <span className="text-blue-600 font-bold">78%</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-yellow-50 rounded">
                    <span className="font-medium">Staff Turnover</span>
                    <span className="text-yellow-600 font-bold">12%</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-purple-50 rounded">
                    <span className="font-medium">Quality Score</span>
                    <span className="text-purple-600 font-bold">4.7/5</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-4">Regional Comparison</h2>
                <p className="text-gray-600 mb-4">
                  Compare vitality metrics across different regions and hospital systems.
                </p>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Northeast</span>
                    <div className="w-32 bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{width: '85%'}}></div>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <span>Southeast</span>
                    <div className="w-32 bg-gray-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{width: '92%'}}></div>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <span>Midwest</span>
                    <div className="w-32 bg-gray-200 rounded-full h-2">
                      <div className="bg-yellow-600 h-2 rounded-full" style={{width: '78%'}}></div>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <span>West</span>
                    <div className="w-32 bg-gray-200 rounded-full h-2">
                      <div className="bg-purple-600 h-2 rounded-full" style={{width: '88%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      case 'Glossary':
        return (
          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Glossary</h1>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Medical and Statistical Terms</h2>
              <div className="space-y-4">
                <div className="border-b pb-3">
                  <h3 className="font-semibold text-blue-900">Bed Occupancy Rate</h3>
                  <p className="text-gray-600 text-sm">The percentage of hospital beds occupied by patients over a specific period.</p>
                </div>
                <div className="border-b pb-3">
                  <h3 className="font-semibold text-blue-900">Case Mix Index</h3>
                  <p className="text-gray-600 text-sm">A measure of the complexity of cases treated at a hospital relative to the average.</p>
                </div>
                <div className="border-b pb-3">
                  <h3 className="font-semibold text-blue-900">FTE (Full-Time Equivalent)</h3>
                  <p className="text-gray-600 text-sm">A unit that indicates the workload of an employed person in a way that makes workloads comparable across various contexts.</p>
                </div>
                <div className="border-b pb-3">
                  <h3 className="font-semibold text-blue-900">Length of Stay (LOS)</h3>
                  <p className="text-gray-600 text-sm">The average number of days patients spend in the hospital.</p>
                </div>
                <div className="border-b pb-3">
                  <h3 className="font-semibold text-blue-900">Metropolitan Statistical Area (MSA)</h3>
                  <p className="text-gray-600 text-sm">A geographical region with a relatively high population density at its core and close economic ties throughout the area.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-blue-900">Utilization Rate</h3>
                  <p className="text-gray-600 text-sm">The extent to which hospital services are used by patients, typically expressed as a percentage.</p>
                </div>
              </div>
            </div>
          </div>
        )
      case 'AHAData.com':
        return (
          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">AHAData.com</h1>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">External Resources</h2>
              <p className="text-gray-600 mb-6">
                Access additional data, reports, and resources from the American Hospital Association.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-blue-900 mb-2">Annual Survey Database</h3>
                  <p className="text-gray-600 text-sm mb-3">Comprehensive hospital data collected annually from AHA members.</p>
                  <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">Learn More →</button>
                </div>
                <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-blue-900 mb-2">Market Insights</h3>
                  <p className="text-gray-600 text-sm mb-3">Industry trends and analysis for healthcare professionals.</p>
                  <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">Learn More →</button>
                </div>
                <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-blue-900 mb-2">Research Reports</h3>
                  <p className="text-gray-600 text-sm mb-3">In-depth studies on healthcare delivery and outcomes.</p>
                  <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">Learn More →</button>
                </div>
                <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-blue-900 mb-2">Data Tools</h3>
                  <p className="text-gray-600 text-sm mb-3">Interactive tools for analyzing hospital performance data.</p>
                  <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">Learn More →</button>
                </div>
              </div>
            </div>
          </div>
        )
      default:
        return <div>Page not found</div>
    }
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-slate-900 text-white flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-slate-700">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-slate-900" />
            </div>
            <div>
              <div className="text-sm font-semibold">AHA Data &amp;</div>
              <div className="text-sm">Insights</div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {navigationItems.map((item) => {
              const IconComponent = item.icon
              return (
                <li key={item.name}>
                  <button
                    onClick={() => {
                      console.log('Navigation clicked:', item.name);
                      setActiveTab(item.name);
                      console.log('Active tab set to:', item.name);
                    }}
                    className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                      activeTab === item.name
                        ? 'bg-slate-700 text-white'
                        : 'text-slate-100 hover:bg-slate-700 hover:text-white'
                    }`}
                  >
                    <IconComponent className="w-5 h-5" />
                    <span className="text-sm">{item.name}</span>
                  </button>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {renderContent()}
      </div>
    </div>
  )
}

export default App
