export const COLUMNS = [
]

export const GROUPED_COLUMNS = [ 
    {
        
        Header: 'Кто и Что',
        columns: [
            {
                Header: 'Име',
                accessor: 'name'
            },
            {
                Header: 'Публикаций',
                accessor: 'count_pub'

            },

        ]
    },
    {
        Header: 'Times Viewed',
        accessor: 'pageviews'
        
    },
]

// 1. добавить хєдерок для ID 
// ___ hedr + axesur