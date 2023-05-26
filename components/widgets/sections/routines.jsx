import { CursorArrowRaysIcon, TableCellsIcon, UsersIcon, DocumentChartBarIcon } from '@heroicons/react/24/outline'
import RapidAssessment from './operations/rapidAssessment'

const routines = [
    { id: 3, name: 'Description of what happen during Registration', stat: 'Registration', icon: UsersIcon, change: '122', changeType: 'increase',bg:"green" },
    { id: 1, name: 'Description of what happen during Rapid Assessment', stat: 'Rapid Assessment', icon: DocumentChartBarIcon, change: '122', changeType: 'increase',bg:"indigo" },
    { id: 2, name: 'Description of what happen during Physical Examination', stat: 'Physical Examination', icon: CursorArrowRaysIcon, change: '122', changeType: 'increase',bg:"green" },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function RoutinesComponent() {
    return (
        <div>
            <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {routines.map((item) => (
                    <div
                        key={item.id}
                        className="relative overflow-hidden rounded-lg bg-gray-100 px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6 hover:cursor-pointer"
                    >
                        <dd className="ml-4 flex items-baseline pb-6 sm:pb-7 ">
                            <div className={`absolute rounded-md p-3 bg-sky-500`}>
                                <item.icon className="h-8 w-8 text-white " aria-hidden="true" />
                            </div>
                            <p className="ml-16 truncate text-2xl font-semibold text-gray-900">{item.stat}</p>
                        </dd>
                        <dt>
                            <p className="ml-4 text-sm font-medium text-gray-500">{item.name}</p>
                        </dt>
                    </div>
                ))}
            </dl>
            <div className="mt-5">
                <RapidAssessment/>
            </div>
        </div>
    )
}
