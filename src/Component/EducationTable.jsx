const EducationTable = () => {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full table-auto border-collapse bg-white rounded-lg shadow-lg">
                <thead className="bg-gray-800 text-white">
                    <tr>
                        <th className="px-4 py-2 text-left">Institution</th>
                        <th className="px-4 py-2 text-left">Group</th>
                        <th className="px-4 py-2 text-left">Year</th>
                        <th className="px-4 py-2 text-left">Type</th>
                        <th className="px-4 py-2 text-left">Result</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="hover:bg-gray-200 transition-colors duration-300">
                        <td className="px-4 py-2 border-b">Aftab Uddin School & Collage</td>
                        <td className="px-4 py-2 border-b">Science</td>
                        <td className="px-4 py-2 border-b">2019</td>
                        <td className="px-4 py-2 border-b">SSC</td>
                        <td className="px-4 py-2 border-b">4.78/5.00</td>
                    </tr>
                    <tr className="hover:bg-gray-200 transition-colors duration-300">
                        <td className="px-4 py-2 border-b">Mohammadpur Kendriya College (MKC)</td>
                        <td className="px-4 py-2 border-b">Science</td>
                        <td className="px-4 py-2 border-b">2022</td>
                        <td className="px-4 py-2 border-b">HSC</td>
                        <td className="px-4 py-2 border-b">5.00/5.00</td>
                    </tr>
                    <a href="https://ausc.edu.bd/" className="text-blue-500 pl-3">About School</a><br></br>
                    <a href="https://www.mkc.edu.bd/" className="text-blue-500 pl-3">About Collage</a>
                </tbody>
            </table>
        </div>
    );
};

export default EducationTable;
