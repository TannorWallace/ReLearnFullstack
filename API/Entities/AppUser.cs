namespace API.Entities
{
    public class AppUser
    {
    public int Id { get; set; }
    public string UserName { get; set; }
    //hashing and salting security Auth props
    public byte[] PasswordHash { get; set; }
    public byte[] PasswordSalt { get; set; }
    }
}