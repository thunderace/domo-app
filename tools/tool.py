
import gi
gi.require_version("Gtk", "3.0")
from gi.repository import Gtk

window = Gtk.Window(title="Hello World")
window.show()
window.connect("destroy", Gtk.main_quit)
Gtk.main()

#import gtk

#ma_fenetre = gtk.Window()
#ma_fenetre.set_title("Ceci est mon titre")

#ma_fenetre.connect("destroy", gtk.main_quit)
#ma_fenetre.show() #show_all() existe également
#gtk.main() #lance le programme complet
