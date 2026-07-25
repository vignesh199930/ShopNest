function Profile(){
    return(
        <div className="continer mt-5" style={{maxWidth: '500px'}}>
            <div className="card p-4 shadow">
            
            <h2 className="text-center mb-4">
                My Profile</h2>
                <p><strong>Name:</strong> Vignesh</p>

                <p><strong>Phone</strong> 9884856207</p>
                
                <button className="btn btn-danger ww-100">Logout</button>


            </div>
        </div>
    );
}
export default Profile;