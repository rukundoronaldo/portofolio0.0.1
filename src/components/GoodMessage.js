import React from 'react'

function GoodMessage() {
    return (
        <div class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
            <div class="flex">
              <div>
                <p class="font-bold">cool</p>
                <p class="text-sm">your email was sent</p>
              </div>
            </div>
        </div>
    )
}

export default GoodMessage
