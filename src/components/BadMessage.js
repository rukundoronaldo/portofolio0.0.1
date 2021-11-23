import React from 'react'

function BadMessage({message = 'something went wrong'}) {
    return (
        <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <span class="block sm:inline">{message}</span>
        </div>
    )
}

export default BadMessage
