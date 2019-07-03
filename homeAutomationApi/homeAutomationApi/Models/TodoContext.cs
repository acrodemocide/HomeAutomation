using Microsoft.EntityFrameworkCore;
// using MySQL.Data.EntityFrameworkCore.Extensions;

namespace TodoApi.Models
{
    public class TodoContext : DbContext
    {
        public TodoContext(DbContextOptions<TodoContext> options)
            : base(options)
        {
        }

        public DbSet<TodoItem> TodoItems { get; set; }

        // protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        // {
        //     //  #warning To protect potentially sensitive information in your connection string, 
        //     //  you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 
        //     //  for guidance on storing connection strings.
            
        //     optionsBuilder.UseMySQL("server=localhost;database=HomeAutomation;user=root;password=Sq1.41421356237!");
        // }

        // protected override void OnModelCreating(ModelBuilder modelBuilder)
        // {
        //     base.OnModelCreating(modelBuilder);

        //     modelBuilder.Entity<TodoItem>(entity =>
        //     {
        //         entity.HasKey(e => e.Id);
        //         entity.Property(e => e.Name).IsRequired();
        //         entity.Property(e => e.IsComplete).IsRequired();
        //     });

        //     // modelBuilder.Entity<Book>(entity =>
        //     // {
        //     //     entity.HasKey(e => e.ISBN);
        //     //     entity.Property(e => e.Title).IsRequired();
        //     //     entity.HasOne(d => d.Publisher)
        //     //     .WithMany(p => p.Books);
        //     // });
        // }
    }
}