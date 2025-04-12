import Header from '@/components/Header';

export default function Contact() {
  return (
    <>
      <Header />
      <main style={{ padding: '20px' }}>
        <h1>Contact Us</h1>
        <form>
          <label>Name:
            <input type="text" placeholder="Your Name" />
          </label><br/><br/>

          <label>Email:
            <input type="email" placeholder="Your Email" />
          </label><br/><br/>

          <label>Message:
            <textarea placeholder="Your Message"></textarea>
          </label><br/><br/>

          <button type="submit">Send</button>
        </form>
      </main>
    </>
  );
}
