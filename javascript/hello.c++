#include <iostream>
#include <string>
#include <vector>
using namespace std;

class Book {
public:
    int id;
    string title;
    string author;
    bool isIssued;

    Book(int bookId, string bookTitle, string bookAuthor)
        : id(bookId), title(bookTitle), author(bookAuthor), isIssued(false) {}
};

class Student {
public:
    int id;
    string name;
    vector<int> issuedBooks; // store book IDs

    Student(int studentId, string studentName)
        : id(studentId), name(studentName) {}

    void displayIssuedBooks() {
        cout << "\n\t--- Issued Books for \"" << name << "\" ---\n";
        if (issuedBooks.empty()) {
            cout << "\tNone\n";
        } else {
            for (int b : issuedBooks) {
                cout << "\tBook ID: " << b << "\n";
            }
        }
    }
};

// Book Issuance Procedure
bool issueBook(Book &book, Student &student) {
    if (book.isIssued) {
        cout << "\n\"Warning!\" Book \"" << book.title << "\" is already issued.\n";
        return false;
    } else {
        book.isIssued = true;
        student.issuedBooks.push_back(book.id);
        cout << "\nBook \"" << book.title << "\" issued successfully to \"" << student.name << "\".\n";
        return true;
    }
}

int main() {
    // Escape characters demo in welcome banner
    cout << "====================================\n";
    cout << "\tWelcome to the \"Library System\" \n";
    cout << "====================================\n\n";

    // Sample books
    Book book1(101, "C++ Programming", "Bjarne Stroustrup");
    Book book2(102, "Introduction to Algorithms", "Cormen et al.");
    Book book3(103, "Clean Code", "Robert C. Martin");

    // Sample students
    Student student1(1, "Alice");
    Student student2(2, "Bob");

    // Issuance process
    issueBook(book1, student1);  // should succeed
    issueBook(book1, student2);  // should fail (already issued)
    issueBook(book3, student2);  // should succeed

    // Display results
    student1.displayIssuedBooks();
    student2.displayIssuedBooks();

    // Escape characters demo in closing
    cout << "\nThank you for using the Library System!\\n";
    cout << "End of Program.\\tGoodbye!\\n\n";

    return 0;
}
