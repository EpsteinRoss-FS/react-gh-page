
import React, { useEffect, useState } from "react"
import { CalendarIcon, LocationMarkerIcon, UsersIcon } from '@heroicons/react/solid'
import { format } from 'date-fns';
import moment from 'moment';

const FetchEvents = () => {
    const [events, setEvents] = useState<any[]>([])

    const positions = [
        {
            id: 1,
            title: 'Back End Developer',
            type: 'Full-time',
            location: 'Remote',
            department: 'Engineering',
            closeDate: '2020-01-07',
            closeDateFull: 'January 7, 2020',
        },
        {
            id: 2,
            title: 'Front End Developer',
            type: 'Full-time',
            location: 'Remote',
            department: 'Engineering',
            closeDate: '2020-01-07',
            closeDateFull: 'January 7, 2020',
        },
        {
            id: 3,
            title: 'User Interface Designer',
            type: 'Full-time',
            location: 'Remote',
            department: 'Design',
            closeDate: '2020-01-14',
            closeDateFull: 'January 14, 2020',
        },
    ]

    const fetchData = async () => {
        const apiKey = "AIzaSyDTZD_K_LsuDZ5kS5C8EpKVTDGcg1PaYhQ";
        const currentDate = new Date().toISOString();
        await fetch('https://www.googleapis.com/calendar/v3/calendars/vcjolj9j5oq560bp0mtgqi0jio%40group.calendar.google.com/events?' +
            'orderBy=startTime&singleEvents=true&timeMin='
            + currentDate +
            '&showDeleted=false&key=' + apiKey)
            .then(response => {
                // console.log(response.json());
                return response.json()
            })
            .then(data => {
                console.log(data);
                setEvents(data.items)
            })
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
            {/*{events.length > 0 && (*/}
            {/*    <ul>*/}
            {/*        {events.map(event => (*/}
            {/*            <li key={event.id}>{event.summary}</li>*/}
            {/*        ))}*/}
            {/*    </ul>*/}
            {/*)}*/}

            <div className="bg-white shadow overflow-hidden sm:rounded-md">
                <ul role="list" className="divide-y divide-gray-200">
                    {events.map((event) => (
                        <li key={event.id}>
                            <a href="#" className="block hover:bg-gray-50">
                                <div className="px-4 py-4 sm:px-6">
                                    <div className="flex items-center justify-between">
                                        <p className="text-sm font-medium text-indigo-600 truncate">{event.summary}</p>
                                        <div className="ml-2 flex-shrink-0 flex">
                                            <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                {/*{position.type}*/}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="mt-2 sm:flex sm:justify-between">
                                        <div className="sm:flex">
                                            <p className="flex items-center text-sm text-gray-500">
                                                <LocationMarkerIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                                                {event.location}
                                            </p>

                                        </div>
                                        <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                                            <CalendarIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                                            <p>

                                                From:    <b>
                                                {moment(event.start.dateTime).format('MM-DD-YYYY')}</b>
                                            {/*    {format(event.start.dateTime, 'dd/mm/yyyy')}*/}

                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default FetchEvents
